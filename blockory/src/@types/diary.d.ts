type Diary = {
  title: string
  description: string
  diaryBody: string
  thumbnailBody: string
  targetDate: Date
}

type DiaryInfo = {
  diaryId: string
  title: string
  writerId: string
  writerName: string
  description: string
  diaryBody: string
  thumbnailBody: string
  targetDate: Date
  updateDate: Date
}

type DiaryInfoList = {
  diaryCount: number
  items: DiaryInfo[]
}
