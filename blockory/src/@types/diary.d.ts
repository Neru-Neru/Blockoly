type DiaryInfo = {
  diaryId: string
  title: string
  writerId: string
  writerName: string
  description: string
  thumbnailBody: string
}

type DiaryInfoList = {
  diaryCount: number
  items: DiaryInfo[]
}
