import { Injectable } from '@angular/core';
import {Dictionary} from '../model/dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor() { }

  dictionarys :Dictionary[] = [
    {
      id:1,
      name: 'Tiger',
      information:'Hổ hay còn gọi là cọp hoặc hùm (và các tên gọi khác như Ông ba mươi, kễnh, khái) ' +
        'là một loài động vật có vú thuộc Họ Mèo được xếp vào một trong năm loài "mèo lớn" thuộc chi Panthera. ' +
        'Hổ là một loài thú ăn thịt, chúng dễ nhận biết nhất bởi các sọc vằn dọc sẫm màu trên bộ lông màu đỏ cam với phần bụng trắng.' +
        ' Hổ là loài thú lớn nhất trong họ Mèo và là động vật lớn thứ ba trong các loài thú ăn thịt (sau gấu Bắc Cực và gấu nâu). ' +
        'Hổ là một trong những loài động vật có biểu tượng lôi cuốn và dễ nhận biết nhất trên thế giới với những sọc vằn vện không ' +
        'lẫn vào đâu được. Chúng nổi bật trong thần thoại và văn hóa dân gian cổ đại, tiếp tục được miêu tả trong các bộ phim và ' +
        'văn học hiện đại, xuất hiện trên nhiều lá cờ, phù hiệu áo giáp và làm linh vật cho các đội tuyển thể thao. ' +
        'Đặc biệt trong văn hóa phương Đông, hổ được mệnh danh là "chúa sơn lâm". Do đó, chúng là biểu tượng quốc gia của nhiều nước ' +
        'như Ấn Độ, Bangladesh, Malaysia và Hàn Quốc.'
    },
    {
      id:2,
      name:'Cat',
      information:'Mèo (chính xác hơn là loài mèo nhà để phân biệt với các loài trong họ Mèo khác) là động vật có vú, ' +
        'nhỏ nhắn và chuyên ăn thịt, sống chung với loài người, được nuôi để săn vật gây hại hoặc làm thú nuôi cùng với chó nhà. ' +
        'Mèo nhà đã sống gần gũi với loài người ít nhất 9.500 năm,và hiện nay chúng là con vật cưng phổ biến nhất trên thế giới.'
    },
    {
      id:3,
      name:'Dog',
      information:'Chó (Danh pháp khoa học: Canis lupus familiaris hoặc Canis familiaris; từ Hán Việt gọi là "cẩu" (狗), ' +
        '"khuyển" (犬) hoặc cầy, những chú chó con còn được gọi là "cún"), là một loài động vật thuộc chi Chó (Canis), ' +
        'tạo nên một phần tiến hóa của sói, đồng thời là loài động vật ăn thịt trên cạn có số lượng lớn nhất.' +
        '[ Chó và sói xám thuộc nhóm chị em, giống như những loài sói hiện đại đều không có họ hàng gần đến những loài sói được ' +
        'thuần hóa đầu tiên,[11][12] đồng nghĩa với tổ tiên gốc của chó đã bị tuyệt chủng.'
    },
    {
      id:4,
      name:'Jaguar',
      information:'Báo đốm hay báo đốm Mỹ (Panthera onca) (tiếng Anh: Jaguar) là một trong năm loài lớn nhất của Họ Mèo ' +
        'bên cạnh sư tử, hổ, báo hoa mai và báo tuyết, và loài duy nhất trong số năm loài này có nguồn gốc từ khu vực châu Mỹ.' +
        ' Phạm vi hiện tại của báo đốm kéo dài từ Tây Nam Hoa Kỳ và Mexico ở Bắc Mỹ, qua phần lớn Trung Mỹ, ' +
        'và phía nam đến Paraguay và miền bắc Argentina ở Nam Mỹ. Mặc dù có những cá thể riêng biệt hiện đang sống ở phía tây Hoa Kỳ' +
        ', loài này phần lớn đã bị tuyệt chủng khỏi Hoa Kỳ kể từ đầu thế kỷ 20. Chúng được liệt kê là loài sắp bị đe dọa trong ' +
        'Sách Đỏ IUCN; và số lượng của chúng đang giảm dần. Các mối đe dọa bao gồm bị mất và phân mảnh môi trường sống. ' +
        'Báo đốm còn là loài mèo lớn nhất châu Mỹ, và là loài có kích thước lớn thứ ba trong Họ Mèo (chỉ sau hổ và sư tử), ' +
        'chúng là loài mèo có lực cắn mạnh nhất và có phương pháp tấn công vào đầu nạn nhân thay vì cổ họng.'
    }
  ];

  getAll(){
    return this.dictionarys;
  }

  translate(id : number) {
    for (let a in this.dictionarys) {
      if(id === this.dictionarys[a].id) {
        return this.dictionarys[a].information

      }
    }
  }

}
