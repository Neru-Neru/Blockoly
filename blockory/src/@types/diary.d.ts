type Diary = {
  Title: string
  Description: string
  DiaryBody: string[][]
  ThumbnailBody: string
  TargetDate: Date | string
}

type DiaryInfo = {
  DiaryId: string
  Title: string
  WriterId: string
  WriterName: string
  Description: string
  DiaryBody: string[][]
  ThumbnailBody: string
  TargetDate: Date | string
  UpdateDate: Date | string
}

type DiaryInfoList = {
  DiaryCount: number
  Diaries: DiaryInfo[]
}
