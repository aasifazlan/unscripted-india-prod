# Unscripted India

A civic intelligence platform that simplifies Indian laws, policies, amendments, and socio-economic topics into structured, neutral, and easy-to-understand content.

Built with **Clean Architecture** and the **Repository Pattern** — every layer is independently swappable.

---

## Quick start

### 1. Clone & install

```bash
git clone <your-repo>
cd unscripted-india
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env
# Fill in DATABASE_URL, ANTHROPIC_API_KEY, OPENAI_API_KEY, PINECONE_API_KEY, NEXTAUTH_SECRET
```

### 3. Set up the database

```bash
# Start PostgreSQL (Docker shortcut)
docker run --name unscripted-pg -e POSTGRES_PASSWORD=password -e POSTGRES_DB=unscripted_india -p 5432:5432 -d postgres:16

# Run migrations
npm run db:migrate

# Generate Prisma client
npm run db:generate

# Seed sample data
npm run db:seed
```

### 4. Run the dev server

```bash
npm run dev
# → http://localhost:3000
```

---

## Architecture overview

```
src/
├── domain/               ← Zero external dependencies. Pure TypeScript.
│   ├── entities/         ← Article, Law, State, Amendment
│   └── repositories/     ← Interfaces: ArticleRepository, AIService, SearchRepository
│
├── application/          ← Business logic. Depends ONLY on domain layer.
│   └── use-cases/
│       ├── article/      ← GetArticle, CreateArticle, ListArticles, SimplifyArticle
│       └── search/       ← SearchContent
│
├── infrastructure/       ← Concrete implementations. Swap freely.
│   ├── db/prisma/        ← PrismaClient singleton
│   ├── repositories/     ← PrismaArticleRepository, PineconeSearchRepository
│   ├── ai/               ←  GroqAIService (summarize, simplify, impact, embed)
│   └── container.ts      ← Dependency injection wiring
│
└── presentation/         ← Next.js App Router
    ├── api/              ← REST route handlers (thin controllers)
    ├── components/       ← React components
    └── app/              ← Pages (home, article detail, search, admin, bookmarks)
```

### Swapping the database

1. Write `MongoArticleRepository implements ArticleRepository`
2. Update `container.ts` to inject it
3. Zero changes to application or domain layers ✓

### Swapping the AI provider

1. Write `OpenAIService implements AIService`
2. Update `container.ts`
3. Zero changes to use cases ✓

---

## Key routes

| Route | Description |
|---|---|
| `GET /` | Home — paginated article grid with category filters |
| `GET /articles/[slug]` | Article detail with AI summary + simplify button |
| `GET /search?q=` | Semantic search results |
| `GET /admin/create` | Create a new article (auth required) |
| `GET /bookmarks` | Saved articles |
| `GET /api/articles` | List articles (JSON) |
| `POST /api/articles` | Create article — triggers AI pipeline (auth required) |
| `GET /api/articles/[id]` | Get single article |
| `POST /api/articles/[id]/simplify` | AI plain-language explanation |
| `GET /api/search?q=` | Semantic search |

---

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 14 (App Router), TypeScript, Tailwind CSS |
| Database | PostgreSQL + Prisma ORM |
| AI summarisation | Anthropic Claude (`claude-sonnet-4-6`) |
| Embeddings | OpenAI `text-embedding-3-small` |
| Vector search | Pinecone |
| Auth | NextAuth v4 + Google OAuth |
| Deployment | Vercel (frontend) + Railway/Render (DB) |

---

## Environment variables

| Variable | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string |
| `ANTHROPIC_API_KEY` | For summarise / simplify / impact analysis |
| `OPENAI_API_KEY` | For text embeddings |
| `PINECONE_API_KEY` | Vector DB |
| `PINECONE_INDEX` | Index name (default: `unscripted-india`) |
| `NEXTAUTH_SECRET` | Random secret for session signing |
| `NEXTAUTH_URL` | Your app URL |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret |

---

## Scripts

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run db:migrate   # Run Prisma migrations
npm run db:generate  # Regenerate Prisma client
npm run db:studio    # Open Prisma Studio (DB GUI)
npm run db:seed      # Seed sample articles
```

---

## Extending the platform

### Add a new content type (e.g. Court Judgments)

1. Add `JUDGMENT` to `ArticleCategory` in `Article.ts` and `schema.prisma`
2. Add label in `CategoryFilter.tsx`
3. Run `npm run db:migrate`
4. Done — no other layers need changes

### Add a new AI feature (e.g. translate to Hindi)

1. Add `translateToHindi(text: string): Promise<string>` to `AIService` interface
2. Implement in ` GroqAIService`
3. Create a `TranslateArticleUseCase`
4. Add an API route

---

## License

MIT
