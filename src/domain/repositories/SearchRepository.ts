export interface SearchResult {
  articleId: string
  score: number
  snippet: string
}

export interface SearchRepository {
  semanticSearchByVector(
    vector: number[],
    topK?: number,
  ): Promise<SearchResult[]>

  indexArticle(
    articleId: string,
    content: string,
    embedding: number[],
  ): Promise<void>

  deleteFromIndex(articleId: string): Promise<void>
    // 🔥 ADD THIS
  getIndexStats?(): Promise<any>

}