type Diary = {
  Title: string
  Description: string
  DiaryBody: string[][]
  ThumbnailBody: string
  TargetDate: Date
}

type DiaryInfo = {
  DiaryId: string
  Title: string
  WriterId: string
  WriterName: string
  Description: string
  DiaryBody: string[][]
  ThumbnailBody: string
  TargetDate: Date
  UpdateDate: Date
}

type DiaryInfoList = {
  DiaryCount: number
  Diaries: DiaryInfo[]
}
