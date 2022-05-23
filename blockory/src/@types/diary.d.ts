type Diary = {
  Title: string
  Description: string
  DiaryBody: string
  ThumbnailBody: string
  TargetDate: Date
}

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
