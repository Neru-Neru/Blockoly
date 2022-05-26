import React from 'react'

import { useNavigate } from 'react-router-dom'

import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import ListSubheader from '@mui/material/ListSubheader'
import IconButton from '@mui/material/IconButton'

type Props = {
  diaryInfoList: DiaryInfoList
}

const ThumbnailList: React.FC<Props> = (props) => {
  const { diaryInfoList } = props

  const navigate = useNavigate()

  const clickThumbnail = (item: DiaryInfo) => {
    // Go to Diary content page with item(:DiaryInfo)
    navigate('/diary-content', { state: { diary: item } })
  }

  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={3}>
        <ListSubheader component="div">にっきリスト</ListSubheader>
      </ImageListItem>
      {diaryInfoList.items.map((item: DiaryInfo) => (
        <ImageListItem
          key={item.diaryId}
          onClick={() => {
            clickThumbnail(item)
          }}
        >
          <img
            src={`data:image/png;${item.thumbnailBody}?w=248&fit=crop&auto=format`}
            srcSet={`data:image/png;${item.thumbnailBody}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            actionIcon={
              <IconButton sx={{ color: 'rgba(255, 255, 255, 0.54)' }} aria-label={`info about ${item.title}`} />
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

export default ThumbnailList
