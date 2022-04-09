import { Injectable } from '@angular/core';
import {Song} from '../model/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor() { }

  playlist: Song[] = [
    {
      id: 'F-xyS0oO4Mc?list=RDF-xyS0oO4Mc',
      name: 'Một thuở Yêu người - Nguyên Khang'
    },
    {
      id: '7xx70gpTAxo?list=RDF-xyS0oO4Mc',
      name: 'Tình nồng - Nguyên Khang'
    },
    {
      id: 'YkKif77JQWI?list=RDF-xyS0oO4Mc',
      name: 'Không trọn vẹn nữa- Châu Khải Phong'
    },
    {
      id: 'QosfTa3FZZ0?list=RDF-xyS0oO4Mc',
      name: 'Mất bao lâu - Khang Việt'
    },
    {
      id: '6IX9kq4Ovzc?list=RDF-xyS0oO4Mc',
      name: 'Sai cách yêu - Lê Bảo Bình'
    }
  ];

  findSongById(id: string) {
    return this.playlist.find(item => item.id === id);
  }
}
