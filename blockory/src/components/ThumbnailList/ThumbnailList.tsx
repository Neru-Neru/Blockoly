import React from 'react'

import { useLocation, useNavigate } from 'react-router-dom'

import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import ListSubheader from '@mui/material/ListSubheader'
import IconButton from '@mui/material/IconButton'

type Props = {
  diaryInfoList: DiaryInfoList | undefined
}

const ThumbnailList: React.FC<Props> = (props) => {
  const { diaryInfoList } = props

  const navigate = useNavigate()
  const location = useLocation()

  const clickThumbnail = (item: DiaryInfo) => {
    // Go to Diary content page with item(:DiaryInfo)
    navigate('/diary-content', { state: { diary: item, prev: location.pathname } })
  }

  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={3}>
        <ListSubheader component="div">にっきリスト</ListSubheader>
      </ImageListItem>
      {diaryInfoList &&
        diaryInfoList.Diaries.map((item: DiaryInfo) => (
          <ImageListItem
            key={item.DiaryId}
            onClick={() => {
              clickThumbnail(item)
            }}
          >
            <img
              src={`data:image/png;${item.ThumbnailBody}?w=248&fit=crop&auto=format`}
              srcSet={`data:image/png;${item.ThumbnailBody}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt=""
              loading="lazy"
            />
            <ImageListItemBar
              title={item.Title}
              actionIcon={
                <IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)' }} aria-label={`info about ${item.Title}`} />
              }
            />
          </ImageListItem>
        ))}
    </ImageList>
  )
}

export default ThumbnailList
