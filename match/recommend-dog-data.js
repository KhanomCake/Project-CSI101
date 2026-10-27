// ข้อมูลสุนัขสำหรับ Dog Match (ย้ายมาจาก recommend-dog.json เพื่อให้เปิดไฟล์ตรง ๆ ได้โดยไม่ต้องใช้ fetch)
const DOG_BREEDS_DATA = [
    {
    "id": 1,
    "image": "https://du2j4cfd2qo0k.cloudfront.net/e8c823be_5652_4863_af17_53ee587e9861_5d55470c13.png",
    "name": "ปอมเมอเรเนียน",
    "spaceNeeded": 1,
    "energy": 1,
    "grooming": 3,
    "experience": 3,
    "description": "ขนาดตัวเล็ก เหมาะกับคอนโด ออกกำลังกายไม่มาก แต่ต้องแปรงขนและดูแลขนฟูเป็นประจำ"
  },
  {
    "id": 2,
    "image": "https://img.thaicdn.net/u/2018/Jarosphan/Pet/Dog/47798/03.jpg",
    "name": "ชิวาวา",
    "spaceNeeded": 1,
    "energy": 1,
    "grooming": 1,
    "experience": 1,
    "description": "ตัวเล็กมาก ดูแลง่าย ขนสั้น ไม่ต้องการพื้นที่หรือเวลาออกกำลังกายเยอะ เหมาะกับมือใหม่"
  },
  {
    "id": 3,
    "image": "https://cdn.ennxo.com/uploads/products/640/cb64e497fe9441599f9b7185b92f4e27.jpg",
    "name": "ชิสุ",
    "spaceNeeded": 1,
    "energy": 1,
    "grooming": 5,
    "experience": 1,
    "description": "เป็นมิตร เข้ากับคนง่าย ชอบนอนพักผ่อน แต่ต้องดูแลแปรงขนและตัดแต่งขนเป็นประจำ"
  },
  {
    "id": 4,
    "image": "https://cdn.ennxo.com/uploads/products/640/2cf383a4ab454f2eae8e6393937e2169.jpg",
    "name": "พุดเดิ้ล (ทอย/มินิ)",
    "spaceNeeded": 1,
    "energy": 3,
    "grooming": 5,
    "experience": 1,
    "description": "ฉลาด ฝึกง่าย เหมาะกับมือใหม่ พลังงานปานกลาง แต่ขนหยิกต้องเข้าร้านตัดแต่งขนเรื่อยๆ"
  },
  {
    "id": 5,
    "image": "https://png.pngtree.com/png-clipart/20240312/original/pngtree-pug-dog-breed-png-image_14569258.png",
    "name": "ปั๊ก",
    "spaceNeeded": 1,
    "energy": 1,
    "grooming": 1,
    "experience": 1,
    "description": "ขนสั้นดูแลสบาย ไม่ชอบออกกำลังกายหนักเพราะหน้าสั้น เลี้ยงง่ายในพื้นที่จำกัด"
  },
  {
    "id": 6,
    "image": "https://cdn.ennxo.com/uploads/products/640/d6295aeda3f641cabdccd4af0c56aaee.jpg",
    "name": "เฟรนช์ บูลด็อก",
    "spaceNeeded": 1,
    "energy": 1,
    "grooming": 1,
    "experience": 3,
    "description": "ขนสั้นดูแลง่าย ไม่ต้องการการออกกำลังกายเยอะ แต่อาจมีดื้อบ้างเล็กน้อย"
  },
  {
    "id": 7,
    "image": "https://108dog.com/market/board/thumbnail/94e3aef7-959a-4e74-b003-910fa9dc14dc.jpg",
    "name": "ยอร์คเชียร์ เทอร์เรีย",
    "spaceNeeded": 1,
    "energy": 1,
    "grooming": 5,
    "experience": 3,
    "description": "ตัวเล็กเหมาะกับคอนโด มีความมั่นใจในตัวเองสูง ขนยาวสวยงามที่ต้องพิถีพิถันในการดูแล"
  },
  {
    "id": 8,
    "image": "https://cdn.ennxo.com/uploads/products/640/50ef9f0f86264e5dbc7dfb2a4a245ac6.jpg",
    "name": "มอลทีส",
    "spaceNeeded": 1,
    "energy": 1,
    "grooming": 5,
    "experience": 1,
    "description": "อ่อนโยน ว่าว่างว่างาน ตัวเล็ก เลี้ยงในคอนโดได้ดี ขนสีขาวสลวยต้องหมั่นทำความสะอาดและแปรงขน"
  }, 
  {
    "id": 9,
    "image": "https://cdn.ennxo.com/uploads/products/640/3dbae8197c694c078b606b0f25093014.jpg",
    "name": "ปาปิยอง",
    "spaceNeeded": 1,
    "energy": 3,
    "grooming": 3,
    "experience": 1,
    "description": "ฉลาดเป็นอันดับต้นๆ ตื่นตัว ชอบกิจกรรมและเล่นเกม ขนยาวปานกลางดูแลไม่ยากอย่างที่คิด"
  },
  {
    "id": 10,
    "image": "https://glurgang.com/wp-content/uploads/2023/07/Characteristics-and-Behavior-of-Bichon-Frize.jpg",
    "name": "บิชอน ฟริเซ่",
    "spaceNeeded": 1,
    "energy": 3,
    "grooming": 5,
    "experience": 3,
    "description": "ร่าเริง อารมณ์ดี เหมาะกับครอบครัวและมือใหม่ ขนสีขาวหยิกฟูต้องตัดแต่งทรงกลมเป็นประจำ"
  },

  {
    "id": 11,
    "image": "https://image.dogilike.com/shareimg/contentimg/2013/prig/Breed/Boston_Terrier_Eden_Forever.JPG",
    "name": "บอสตัน เทอร์เรีย",
    "spaceNeeded": 1,
    "energy": 3,
    "grooming": 1,
    "experience": 1,
    "description": "สุภาพเรียบร้อย เรียกร้องความสนใจน้อย ขนสั้นดูแลง่าย มีพลังงานปานกลางชอบเล่นสนุก"
  },
  {
    "id": 12,
    "image": "https://cdn.ennxo.com/uploads/products/480/5ad44872e5054b318092cacc9789fdc6.jpg",
    "name": "ดัชชุน (ไส้กรอก)",
    "spaceNeeded": 1,
    "energy": 3,
    "grooming": 1,
    "experience": 3,
    "description": "ลำตัวยาวขาขุดดิน ตื่นตัวตลอดเวลา ขนสั้นดูแลง่าย แต่มีความเป็นตัวของตัวเองสูงและดื้อบ้าง"
  },
  {
    "id": 13,
    "image": "https://www.decadeslife.com/wp-content/uploads/2022/11/Cavalier-King-Charles-Spaniel-Dog.webp",
    "name": "คาวาเลียร์ คิง ชาร์ลส สแปเนียล",
    "spaceNeeded": 1,
    "energy": 3,
    "grooming": 3,
    "experience": 1,
    "description": "อ่อนโยน ว่าว่างว่างาน เข้ากับทุกคนได้ดี ขนยาวนุ่มปานกลางต้องแปรงสัปดาห์ละ 1-2 ครั้ง"
  },
  {
    "id": 14,
    "image": "https://png.pngtree.com/thumb_back/fw800/background/20230523/pngtree-jack-russell-terrier-pictures-and-video-wallpapers-image_2687004.jpg",
    "name": "แจ็ครัสเซลล์ เทอร์เรียร์",
    "spaceNeeded": 3,
    "energy": 5,
    "grooming": 1,
    "experience": 5,
    "description": "พลังงานล้นเหลือ ฉลาดปราดเปรียว ต้องการการออกกำลังกายหนักและผู้เลี้ยงที่ฝึกอย่างจริงจัง"
  },
  {
    "id": 15,
    "image": "https://cdn.ennxo.com/uploads/products/640/bf52cdfd8c11443893d2aa89c13c3568.jpg",
    "name": "ชิบะอินุ",
    "spaceNeeded": 3,
    "energy": 3,
    "grooming": 3,
    "experience": 5,
    "description": "รักอิสระ มั่นใจในตัวเองสูง ต้องการพื้นที่และเวลาออกกำลังกายปานกลาง ผู้เลี้ยงต้องมีความเชี่ยวชาญในการฝึก"
  },
  {
    "id": 16,
    "image": "https://cdn.ennxo.com/uploads/products/640/6e3bff99a7374952abea0b5cd3e9a7ad.jpg",
    "name": "แจพานีส สปิตซ์",
    "spaceNeeded": 1,
    "energy": 3,
    "grooming": 5,
    "experience": 3,
    "description": "ร่าเริง ฉลาด เป็นมิตร ขนสีขาวหนาทึบต้องการการดูแลแปรงขนสม่ำเสมอเพื่อไม่ให้เป็นก้อน"
  },
  {
    "id": 17,
    "image": "https://neo-corporate.com/wp-content/uploads/2026/01/pekingese-dog.jpg",
    "name": "ปักกิ่ง",
    "spaceNeeded": 1,
    "energy": 1,
    "grooming": 5,
    "experience": 3,
    "description": "รักสงบ สง่างาม ไม่ชอบออกกำลังกายหนัก เหมาะกับพื้นที่เล็ก แต่ขนยาวหนาต้องการการดูแลสูง"
  },
  {
    "id": 18,
    "image": "https://pettocute.com/storage/2022/06/sebastian-coman-travel-nufybs_HQKc-unsplash-e1655980027241.webp",
    "name": "มินิเจอร์ ชเนาเซอร์",
    "spaceNeeded": 1,
    "energy": 3,
    "grooming": 5,
    "experience": 3,
    "description": "มีหนวดเคราเป็นเอกลักษณ์ ตื่นตัว ฉลาด ป้องกันภัยได้ดี ต้องการการตัดแต่งทรงขนเป็นประจำ"
  },
  {
    "id": 19,
    "image": "https://mypets.decorexpro.com/wp-content/uploads/2017/08/mini-pincher-e1503389186491.jpg",
    "name": "มินิเจอร์ พินเชอร์",
    "spaceNeeded": 1,
    "energy": 5,
    "grooming": 1,
    "experience": 3,
    "description": "ตัวเล็กแต่ใจใหญ่ แอคทีฟ ขนสั้นดูแลง่ายมาก แต่ต้องการการฝึกเพื่อลดความก้าวร้าวหรือตกใจง่าย"
  },
  {
    "id": 20,
    "image": "https://www.bloggang.com/data/v/vinitsiri/picture/1281961380.jpg",
    "name": "เวสต์ไฮแลนด์ไวต์เทอร์เรียร์",
    "spaceNeeded": 1,
    "energy": 3,
    "grooming": 5,
    "experience": 3,
    "description": "ขนสีขาวสั้นแข็ง ร่าเริง มั่นใจในตัวเอง ชอบสำรวจ ต้องการการออกกำลังกายปานกลางและแปรงขนบ่อยๆ"
  },

  {
    "id": 21,
    "image": "https://image.dogilike.com/shareimg/contentimg/2013/prig/Breed/Piccolo%20Levriero%20Italiano%20ITALIAN%20GREYHOUND3.jpg",
    "name": "อิตาเลียน เกรย์ฮาวด์",
    "spaceNeeded": 1,
    "energy": 3,
    "grooming": 1,
    "experience": 3,
    "description": "รูปร่างเพรียวลม ขนสั้นมากดูแลง่าย ชอบวิ่งเล่นในระยะเวลาสั้นๆ ละเอียดอ่อน ไวต่อความรู้สึก"
  },
  {
    "id": 22,
    "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh0LUWwWY56BhDQR1lZIneHHYYb1n72wLbDkkNb6Gr2TzGoRzjvfloSyg4d9FGvphoRPzMzmhlj57SMOzOF04pDvtHkPBAJ35VA79QJlyFv_b4xeRDtnhoZbwV-lLmU66WEDNbrPEEQdVY/w1200-h630-p-k-no-nu/Affenpinscher.jpg",
    "name": "อัฟเฟินพินเชอร์",
    "spaceNeeded": 1,
    "energy": 3,
    "grooming": 3,
    "experience": 3,
    "description": "ฉายา 'ลิงน้อย' ตัวเล็ก ร่าเริง มีอารมณ์ขัน ขนหนาหยาบปานกลาง ต้องการการแปรงขนสัปดาห์ละ 1-2 ครั้ง"
  },
  {
    "id": 23,
    "image": "https://pettocute.com/storage/2022/07/dog-g7dddc07b0_640.webp",
    "name": "บรุซเซิลส์ กริฟฟัน",
    "spaceNeeded": 1,
    "energy": 1,
    "grooming": 3,
    "experience": 3,
    "description": "สุนัขตัวเล็กหน้าสั้น ประจบเก่ง ปรับตัวกับชีวิตคอนโดได้ดี ขนหยาบต้องการการดูแลปานกลาง"
  },
  {
    "id": 24,
    "image": "https://www.bloggang.com/data/4/49days/picture/1325710796.jpg",
    "name": "สก็อตติช เทอร์เรียร์",
    "spaceNeeded": 1,
    "energy": 3,
    "grooming": 5,
    "experience": 5,
    "description": "อิสระ มั่นใจในตัวเองสูง ขาสั้นตัวยาว ขนชั้นนอกแข็งและขนกระโปรงยาว ต้องแปรงขนและตัดแต่งเป็นประจำ"
  },
  {
    "id": 25,
    "image": "https://wancolab.com/wp/wp-content/uploads/2021/05/bull_terrier_05.jpg",
    "name": "เคอร์รี่ บลู เทอร์เรียร์",
    "spaceNeeded": 3,
    "energy": 5,
    "grooming": 5,
    "experience": 5,
    "description": "ขนาดปานกลาง พลังงานสูง ขนหยิกนุ่มสีฟ้าเทาที่ไม่ร่วงง่ายแต่ต้องตัดแต่งทรงอย่างพิถีพิถัน ต้องการผู้เลี้ยงที่มีประสบการณ์"
  },
  {
    "id": 26,
    "image": "https://cdn.pixabay.com/photo/2022/11/13/09/07/pembroke-welsh-corgi-7588703_640.jpg",
    "name": "เวลช์ คอร์กี้ เพมบรุก",
    "spaceNeeded": 3,
    "energy": 3,
    "grooming": 5,
    "experience": 3,
    "description": "ไม่มีหางหรือหางกุด ร่าเริง ฉลาด แข็งแรง พลังงานปานกลางถึงสูง ต้องการการเดินเล่นและแปรงขนสม่ำเสมอ"
  },
  {
    "id": 27,
    "image": "https://img.thaicdn.net/image/pet/Cardigan_Welsh_Corgi_400.jpg",
    "name": "เวลช์ คอร์กี้ คาร์ดิกัน",
    "spaceNeeded": 1,
    "energy": 3,
    "grooming": 3,
    "experience": 3,
    "description": "มีหางยาว ลำตัวยาวกว่าเพมบรุกเล็กน้อย สุขุม นิ่งกว่า แต่ต้องการการออกกำลังกายและการแปรงขนพอๆกัน"
  },
  {
    "id": 28,
    "image": "https://cdn.pixabay.com/photo/2020/07/11/03/41/beagle-5392662_1280.jpg",
    "name": "บีเกิล",
    "spaceNeeded": 3,
    "energy": 5,
    "grooming": 1,
    "experience": 5,
    "description": "ขนสั้นดูแลง่ายมาก แต่พลังงานสูง ดมกลิ่นเก่ง และชอบวิ่งเล่น ต้องการเวลาออกกำลังกายกลางแจ้งอย่างเพียงพอ"
  },
  {
    "id": 29,
    "image": "https://glurgang.com/wp-content/uploads/2023/06/Golden-Retriever-Physical-Characteristics.jpg",
    "name": "โกลเด้น รีทรีฟเวอร์",
    "spaceNeeded": 5,
    "energy": 5,
    "grooming": 5,
    "experience": 1,
    "description": "ขนาดใหญ่ เป็นมิตร อ่อนโยน เข้ากับทุกคนได้ดี แต่ต้องการพื้นที่กว้าง เวลาออกกำลังกายเยอะ และหมั่นแปรงขนสม่ำเสมอ"
  },
  {
    "id": 30,
    "image": "https://images.pexels.com/photos/28725007/pexels-photo-28725007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "name": "ลาบราดอร์ รีทรีฟเวอร์",
    "spaceNeeded": 5,
    "energy": 5,
    "grooming": 1,
    "experience": 1,
    "description": "สายพันธุ์ใหญ่ ใจดี ฉลาด พลังงานสูงมาก ขนสั้นแน่นหนาดูแลสบาย ไม่ต้องตัดแต่งทรง"
  },
  
  {
    "id": 31,
    "image": "https://img.freepik.com/fotos-premium/cao-husky-siberiano-deitado-na-grama-da-floresta-em-tamanho-real-descansando-o-retrato-do-cao-husky-com-olhos-castanhos-azuis_77829-8467.jpg",
    "name": "ไซบีเรียน ฮัสกี",
    "spaceNeeded": 5,
    "energy": 5,
    "grooming": 5,
    "experience": 5,
    "description": "สุนัขลากเลื่อนพลังงานสูงมาก ไฮเปอร์ รักอิสระ ผลัดขนเยอะ ต้องมีพื้นที่ออกกำลังกายและผู้เลี้ยงที่คุมอยู่"
  },
  {
    "id": 32,
    "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbLm1mXL_Nh8WKZKsuHovR7tiyOpwJBGNzb5aQqXf4ymnpA6Qz_GQ8h-x-jKVoOz0DjuDjCNlhlBg0KkCPO3S99OZQmtpWdPHW9942tN-f7n0kxyJk-1HrLQqixdjDJBiCGXMbjPNw84bU/s1600/06.jpg",
    "name": "อลาสกัน มาลามิวท์",
    "spaceNeeded": 5,
    "energy": 5,
    "grooming": 5,
    "experience": 5,
    "description": "ตัวใหญ่ทรงพลัง มีความสุขุมกว่าฮัสกี แต่ยังต้องการพื้นที่กว้างและการออกกำลังกายหนัก ขนหนาต้องดูแลสม่ำเสมอ"
  },
  {
    "id": 33,
    "image": "https://lppuppy.com/wp-content/uploads/2026/03/4.jpg",
    "name": "ซามอยด์",
    "spaceNeeded": 5,
    "energy": 5,
    "grooming": 5,
    "experience": 3,
    "description": "สุนัขยิ้มสวย ขนสีขาวหนาฟู ร่าเริง ขี้อ้อน ชอบเข้าสังคม ต้องการการดูแลขนอย่างจริงจังและเวลาออกกำลังกายเยอะ"
  },
  {
    "id": 34,
    "image": "https://cdn.pixabay.com/photo/2022/04/13/15/01/chow-chow-7130446_1280.jpg",
    "name": "เชาเชา",
    "spaceNeeded": 3,
    "energy": 1,
    "grooming": 5,
    "experience": 5,
    "description": "หน้าย่น ลิ้นสีดำ รักสงบ หวงถิ่นฐานและซื่อสัตย์กับเจ้าของ ขนหนาแน่นต้องการการแปรงขนและผู้เลี้ยงที่เข้าใจพฤติกรรม"
  },
  {
    "id": 35,
    "image": "https://elsabeauty.decorexpro.com/wp-content/uploads/2018/09/Animals___Dogs_American_bulldog_looking_at_the_photographer_049120_.jpg",
    "name": "บูลด็อก หรือ บริติช บูลด็อก",
    "spaceNeeded": 1,
    "energy": 1,
    "grooming": 1,
    "experience": 3,
    "description": "ตัวหนา ล่ำสัน รักสงบ ขี้เกียจออกกำลังกาย ขนสั้นดูแลง่าย แต่ต้องคอยทำความสะอาดรอยย่นตามใบหน้า"
  },
  {
    "id": 36,
    "image": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/UUZTTZEVSYHLIIIOBYOFYVBBTQ.jpg&w=1200",
    "name": "อเมริกัน บูลลี่",
    "spaceNeeded": 3,
    "energy": 3,
    "grooming": 1,
    "experience": 3,
    "description": "กล้ามเนื้อแน่น ดูน่าเกรงขามแต่อ่อนโยน รักครอบครัว ขนสั้นดูแลสบาย ต้องการการออกกำลังกายระดับปานกลาง"
  },
  {
    "id": 37,
    "image":"https://t1.blockdit.com/photos/2022/02/6218adb0bb91ae116a568cfb_800x0xcover_00CLelBI.jpg",
    "name": "อเมริกัน พิทบูล เทอร์เรียร์",
    "spaceNeeded": 3,
    "energy": 5,
    "grooming": 1,
    "experience": 5,
    "description": "พละกำลังสูงมาก มั่นใจ ฉลาด ขนสั้นดูแลสบาย ต้องการการออกกำลังกายหนักและผู้เลี้ยงที่มีภาวะผู้นำสูง"
  },
  {
    "id": 38,
    "image":"https://cdn.pixabay.com/photo/2017/04/09/20/57/dog-2216866_1280.jpg",
    "name": "บอร์เดอร์ คอลลี่",
    "spaceNeeded": 5,
    "energy": 5,
    "grooming": 3,
    "experience": 5,
    "description": "ฉลาดที่สุดในบรรดาสุนัข พลังงานล้นเหลือ ต้องการการออกกำลังกายทั้งร่างกายและสมองอย่างหนัก เหมาะกับคนชอบฝึกหมา"
  },
  {
    "id": 39,
    "image":"https://www.thaipedigree.com/static/articles/e1b8285253b6a2f233bafdac9958485280ab0d98f80d99a15b3ffed69dd3be59.jpeg",
    "name": "ออสเตรเลียน เชพเพิร์ด",
    "spaceNeeded": 5,
    "energy": 5,
    "grooming": 5,
    "experience": 5,
    "description": "ฉลาด ตื่นตัว แอคทีฟสูงมาก เหมาะกับกิจกรรมกลางแจ้ง ขนยาวปานกลางต้องแปรงขนเป็นประจำ"
  },
  
  {
    "id": 40,
    "image":"https://i.pinimg.com/736x/a4/3f/a6/a43fa62293a6cb326a7eee1f99031948.jpg",
    "name": "เยอรมัน เชเพิร์ด (อัลเซเชียน)",
    "spaceNeeded": 5,
    "energy": 5,
    "grooming": 3,
    "experience": 3,
    "description": "สุนัขใช้งานยอดนิยม ฉลาด ซื่อสัตย์ อารักขาได้ดี พลังงานสูง ต้องการการออกกำลังกายและการฝึกฝนสม่ำเสมอ"
  },
  {
    "id": 41,
    "image":"https://media.istockphoto.com/id/1696964551/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%84%E0%B9%87%E0%B8%AD%E0%B8%81%E0%B9%80%E0%B8%81%E0%B8%AD%E0%B8%A3%E0%B9%8C.jpg?s=612x612&w=0&k=20&c=ysHdAgWAf_iGABC-1BaCLuWBoA7X91er12fE1lkAbnQ=",
    "name": "ค็อกเกอร์ สแปเนียล",
    "spaceNeeded": 3,
    "energy": 3,
    "grooming": 5,
    "experience": 3,
    "description": "หูยาวนุ่ม ร่าเริง อารมณ์ดี ชอบเล่น พลังงานปานกลาง ขนยาวนุ่มสวยงามต้องพิถีพิถันในการแปรงและทำความสะอาดหู"
  },
  {
    "id": 42,
    "image":"https://www.postposmo.com/wp-content/uploads/2020/07/cocker-spaniel4.jpg",
    "name": "อเมริกัน คอกเกอร์ สแปเนียล",
    "spaceNeeded": 3,
    "energy": 3,
    "grooming": 5,
    "experience": 3,
    "description": "ขนาดเล็กลงมาจากค็อกเกอร์ทั่วไป ขนหนาสวยยาว หน้าสั้นกว่าเล็กน้อย ขี้อ้อน ชอบอยู่กับคน และต้องดูแลขนบ่อย"
  },
  {
    "id": 43,
    "image":"https://mypets.decorexpro.com/wp-content/uploads/2017/05/Saluki10.jpg",
    "name": "ซาลูกี",
    "spaceNeeded": 5,
    "energy": 5,
    "grooming": 1,
    "experience": 3,
    "description": "สุนัขล่าสัตว์โบราณ รูปร่างสง่างาม เพรียวลม วิ่งไว รักสงบ ขนสั้นเรียบดูแลสบาย แต่ต้องการพื้นที่กว้างสำหรับวิ่ง"
  },
  {
    "id": 44,
    "image":"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgipvN4r_L8hBeRIjhXfhyWG2zkYAhBm-WZ-qR8WY1GlGMoW6J0XhuI1ky_OGGp1O8CptgVEKeg9crj72IpCQls7QuN_m5_Lh1TyTPW45c-9ZosgsxxhAVH7TE5IFs_O5H81c_Iq_bEkq_A/s1600/whippet_coleman.jpg",
    "name": "วิปเพ็ท",
    "spaceNeeded": 3,
    "energy": 3,
    "grooming": 1,
    "experience": 1,
    "description": "ขนาดปานกลาง รูปร่างเพรียว วิ่งเร็ว เงียบสงบ ปรับตัวง่าย ขนสั้นดูแลง่าย เหมาะกับทั้งคอนโดกว้างหรือบ้าน"
  },
  {
    "id": 45,
    "image":"https://i.pinimg.com/originals/b2/f0/56/b2f0563078e2f5a360e3d85fa1c2623f.jpg",
    "name": "ดัลเมเชียน",
    "spaceNeeded": 5,
    "energy": 5,
    "grooming": 1,
    "experience": 3,
    "description": "ลายจุดเอกลักษณ์ พลังงานสูงมาก ชอบวิ่งเล่นไม่รู้จักเหน็ดเหนื่อย ขนสั้นดูแลสบาย แต่ผลัดขนเรื่อยๆ"
  },
  {
    "id": 46,
    "image":"https://png.pngtree.com/png-vector/20230907/ourmid/pngtree-looking-sharpei-pup-puppy-studio-png-image_9213014.png",
    "name": "ชาเป่ย",
    "spaceNeeded": 3,
    "energy": 3,
    "grooming": 1,
    "experience": 5,
    "description": "ผิวหนังย่นหนาเป็นชั้น รักอิสระ อิสระสูง เป็นสุนัขอารักขาที่ดี ต้องทำความสะอาดตามร่องรอยย่นเพื่อป้องกันผิวหนังอักเสบ"
  },
  {
    "id": 47,
    "image":"https://cdn.ennxo.com/uploads/products/640/f88fe678e3d641c38e9ec9b90e688306.jpg",
    "name": "เบลเจียน มาลีนัว",
    "spaceNeeded": 5,
    "energy": 5,
    "grooming": 1,
    "experience": 5,
    "description": "สุนัขตำรวจสายตระเวน ฉลาด รวดเร็ว พละกำลังและสัญชาตญาณทำงานสูงมาก ขนสั้นดูแลสบาย ต้องการผู้ฝึกระดับมืออาชีพ"
  },
  {
    "id": 48,
    "image":"https://cdn.ennxo.com/uploads/products/640/464112a3455e43748a21f3cce35919c0.jpg",
    "name": "บาสเซ็ต ฮาวด์",
    "spaceNeeded": 3,
    "energy": 1,
    "grooming": 1,
    "experience": 5,
    "description": "หูยาวลากพื้น ขาสั้น ลำตัวยาว ดมกลิ่นเป็นเลิศ รักสงบ เคลื่อนไหวช้า ดื้อเล็กน้อย ขนสั้นดูแลง่าย"
  },
  {
    "id": 49,
    "image":"https://media.komchadluek.net/media/img/size1/2015/10/09/dd7bbk7b9ifejd8dbea65.jpg",
    "name": "อาคิตะ อินุ",
    "spaceNeeded": 5,
    "energy": 3,
    "grooming": 5,
    "experience": 5,
    "description": "สุนัขประจำชาติญี่ปุ่น ร่างใหญ่ ซื่อสัตย์ สง่างามและสงบ แต่หวงถิ่นและไม่คุ้นเคยกับคนแปลกหน้า ต้องการผู้เลี้ยงที่มีประสบการณ์"
  },
  {
    "id": 50,
    "image":"https://cdn.ennxo.com/uploads/products/640/4b9348d16cfc4b63be3a9dde2371b528.jpg",
    "name": "อเมริกัน สแตฟฟอร์ดเชอร์ เทอร์เรียร์",
    "spaceNeeded": 3,
    "energy": 5,
    "grooming": 1,
    "experience": 5,
    "description": "แข็งแรง กล้ามเนื้อแน่น ฉลาด ซื่อสัตย์ ขนสั้นดูแลง่าย ต้องการการเข้าสังคมและการฝึกอย่างสม่ำเสมอ"
  },
  
  {
    "id": 51,
    "image": "https://static.wixstatic.com/media/10e7d0_c21594a873494d888be2cbb9560d14e9~mv2.png/v1/fill/w_980,h_980,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/10e7d0_c21594a873494d888be2cbb9560d14e9~mv2.png",
    "name": "บูล เทอร์เรียร์",
    "spaceNeeded": 3,
    "energy": 5,
    "grooming": 1,
    "experience": 5,
    "description": "หัวรูปไข่เป็นเอกลักษณ์ สนุกสนาน พลังงานสูง ซุกซน และต้องการการฝึกอย่างสม่ำเสมอ"
  },
  {
    "id": 52,
    "image": "https://vetkardiyoloji.com/wp-content/uploads/2023/06/Airedale-terrier-charles14m-1536x1290.jpg",
    "name": "แอร์เดล เทอร์เรียร์",
    "spaceNeeded": 3,
    "energy": 5,
    "grooming": 3,
    "experience": 3,
    "description": "ราชาแห่งสายพันธุ์เทอร์เรียร์ ร่างใหญ่ ฉลาด ตื่นตัวสูง และเหมาะกับผู้เลี้ยงที่ชอบกิจกรรม"
  },
  {
    "id": 53,
    "image": "https://media.istockphoto.com/id/1437763593/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B9%82%E0%B8%A3%E0%B8%94%E0%B8%B5%E0%B9%80%E0%B8%8B%E0%B8%B5%E0%B8%A2%E0%B8%99-%E0%B8%A3%E0%B8%B4%E0%B8%94%E0%B8%88%E0%B9%8C%E0%B9%81%E0%B8%9A%E0%B9%87%E0%B8%84-%E0%B9%80%E0%B8%AD%E0%B8%B2%E0%B8%97%E0%B9%8C%E0%B8%94%E0%B8%AD%E0%B8%A3%E0%B9%8C.jpg?s=612x612&w=0&k=20&c=48iaphS-zx_waidzGnelApqcevKMz9VuPwoZwLPsMVI=",
    "name": "โรดีเชียน ริจแบค",
    "spaceNeeded": 5,
    "energy": 5,
    "grooming": 1,
    "experience": 5,
    "description": "สุนัขล่าสัตว์จากแอฟริกา มีอานขนย้อนทิศทางบนหลัง สง่างาม กล้าหาญ และหวงถิ่นฐาน"
  },
  {
    "id": 54,
    "image": "https://i.pinimg.com/736x/7a/b9/65/7ab965a74b7c16317bd9d68a1b342ad0.jpg",
    "name": "ชิโกะกุ",
    "spaceNeeded": 3,
    "energy": 5,
    "grooming": 3,
    "experience": 5,
    "description": "สุนัขดั้งเดิมของญี่ปุ่น มีลักษณะคล้ายหมาป่า ฉลาด คล่องแคล่ว และมีความซื่อสัตย์สูง"
  },
  {
    "id": 55,
    "image": "https://image.dogilike.com/shareimg/contentimg/2020/meaw/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9D%E0%B8%B6%E0%B8%81/EP8%2018062020/Kai%20Ken.jpg",
    "name": "คาอิ เคน",
    "spaceNeeded": 3,
    "energy": 5,
    "grooming": 3,
    "experience": 5,
    "description": "สุนัขลายเสืออันโดดเด่นจากญี่ปุ่น สายพันธุ์หายาก มีสัญชาตญาณนักล่า และรักอิสระ"
  },
  {
    "id": 56,
    "image": "https://image.dogilike.com/shareimg/contentimg/2013/prig/Breed/rottweiler_2.jpg",
    "name": "ร็อตไวเลอร์",
    "spaceNeeded": 5,
    "energy": 3,
    "grooming": 1,
    "experience": 5,
    "description": "ตัวใหญ่ กล้ามเนื้อแน่น เป็นสุนัขอารักขาชั้นเยี่ยม ซื่อสัตย์ มั่นใจ และต้องการการฝึกอย่างถูกวิธี"
  },
  {
    "id": 57,
    "image": "https://media.istockphoto.com/id/1449439279/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B9%82%E0%B8%94%E0%B9%80%E0%B8%9A%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%81%E0%B8%A1%E0%B8%99-%E0%B8%9E%E0%B8%B4%E0%B8%99%E0%B9%80%E0%B8%8A%E0%B8%AD%E0%B8%A3%E0%B9%8C-%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%88%E0%B9%89%E0%B8%87%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AA%E0%B8%A7%E0%B8%99%E0%B8%AA%E0%B8%B2%E0%B8%98%E0%B8%B2%E0%B8%A3%E0%B8%93%E0%B8%B0-%E0%B8%95%E0%B8%B8%E0%B9%8A%E0%B8%81%E0%B8%95%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%AB%E0%B8%8D%E0%B8%B4%E0%B8%87%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AA%E0%B8%A7%E0%B8%A2%E0%B8%87%E0%B8%B2%E0%B8%A1%E0%B8%99%E0%B8%AD%E0%B8%81%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%AD%E0%B8%B2%E0%B8%97%E0%B8%B4%E0%B8%95%E0%B8%A2%E0%B9%8C%E0%B8%95%E0%B8%81-%E0%B8%AB%E0%B8%B9%E0%B8%9E%E0%B8%B7%E0%B8%8A%E0%B8%82%E0%B8%99%E0%B8%B2.jpg?s=612x612&w=0&k=20&c=ncFmJujEUi8ffHbzL-30kGkb65G-RdJQFonn--zCYe8=",
    "name": "โดเบอร์แมน พินเชอร์",
    "spaceNeeded": 5,
    "energy": 5,
    "grooming": 1,
    "experience": 5,
    "description": "สง่างาม ปราดเปรียว ฉลาดเป็นอันดับต้นๆ ตื่นตัวสูง ป้องกันภัยได้ดีเยี่ยม และต้องการการออกกำลังกายสม่ำเสมอ"
  },
  {
    "id": 58,
    "image": "https://www.dogthailand.net/data/attachment/forum/202506/24/012804u6l77e16lrg66mnl.jpg",
    "name": "เกรตเดน",
    "spaceNeeded": 5,
    "energy": 3,
    "grooming": 1,
    "experience": 3,
    "description": "ยักษ์ใหญ่ใจดี ตัวสูงใหญ่มาก แต่สุภาพ อ่อนโยน ปรับตัวง่าย และชอบนอนพักผ่อนกับครอบครัว"
  },
  {
    "id": 59,
    "image": "https://image.peco-japan.com/optimized_images/281707.jpg",
    "name": "เซนต์เบอร์นาร์ด",
    "spaceNeeded": 5,
    "energy": 1,
    "grooming": 5,
    "experience": 3,
    "description": "สุนัขกู้ภัยขนาดใหญ่ ตัวหนา ขนหนา ใจดี อ่อนโยนกับเด็กๆ ไม่ชอบอากาศร้อน และต้องการการดูแลขน"
  },
  {
    "id": 60,
    "image": "https://cdn.mos.cms.futurecdn.net/N9ahixNY9AB37CvRdzb2ZK.jpg",
    "name": "บูลแมสติฟฟ์",
    "spaceNeeded": 3,
    "energy": 3,
    "grooming": 1,
    "experience": 5,
    "description": "ตัวใหญ่ทรงพลัง หน้าสั้น ย่น เงียบสงบ มั่นใจ ป้องกันครอบครัวได้ดีโดยไม่ต้องเห่ารบกวน"
  },

  {
    "id": 61,
    "image": "https://t4.ftcdn.net/jpg/18/43/34/51/360_F_1843345168_LKa8SuqKpOUCo1gYoLeCNXJ4NsgcuKS9.jpg",
    "name": "ทิเบตัน แมสติฟฟ์",
    "spaceNeeded": 5,
    "energy": 3,
    "grooming": 5,
    "experience": 5,
    "description": "สุนัขยักษ์จากหิมาลัย ขนหนาฟูคล้ายแผงคอสิงโต ซื่อสัตย์ หวงถิ่นฐานสูงมาก ต้องการผู้เลี้ยงระดับมืออาชีพ"
  },
  {
    "id": 62,
    "image": "https://glurgang.com/wp-content/uploads/2023/05/Newfoundland-large-breed-dogs.jpg",
    "name": "นิวฟาวด์แลนด์",
    "spaceNeeded": 5,
    "energy": 3,
    "grooming": 5,
    "experience": 3,
    "description": "ยักษ์ใหญ่ใจดี เชี่ยวชาญการว่ายน้ำและกู้ภัยทางน้ำ อ่อนโยน ขนหนาต้องการการดูแลสม่ำเสมอ"
  },
  {
    "id": 63,
    "image": "https://www.bloggang.com/data/4/49days/picture/1321602483.jpg",
    "name": "เบอร์นีส เมาน์เทน ด็อก",
    "spaceNeeded": 5,
    "energy": 3,
    "grooming": 5,
    "experience": 3,
    "description": "สุนัขภูเขาจากสวิตเซอร์แลนด์ มีสามสีสวยงาม ใจดี อ่อนโยน เข้ากับครอบครัวได้ดี ขนหนาต้องแปรงบ่อย"
  },
  {
    "id": 64,
    "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgmL9oN6jNsfqzBK3ORzLCbN7Zond2LiMzjcK8oLLWz7aUf7V9l9ZVr1MiUgpkItTcSTbHavbWMwT9g8dSOPJjxx3FYm3O_Wg-7DnxBo7bpnUsBoCERUfztyFNBNQbKsTtOBqS_1se0Jw-e/s1600/%25E0%25B9%2580%25E0%25B8%2581%25E0%25B8%25A3%25E0%25B8%2597+%25E0%25B9%2584%25E0%25B8%259E%25E0%25B8%25A3%25E0%25B8%25B5%25E0%25B8%2599%25E0%25B8%25B5%25E0%25B8%25AA.jpg",
    "name": "เกรทไพรีนีส",
    "spaceNeeded": 5,
    "energy": 3,
    "grooming": 5,
    "experience": 5,
    "description": "สุนัขอารักขาฝูงสัตว์ ขนสีขาวหนาฟู สง่างาม สุขุม รักสงบ แต่มีความเป็นตัวของตัวเองสูง"
  },
  {
    "id": 65,
    "image": "https://chocomoji.com/dogs/breeds/mastiff/images/dog-ceo-3.webp",
    "name": "มาสติฟฟ์",
    "spaceNeeded": 5,
    "energy": 1,
    "grooming": 1,
    "experience": 5,
    "description": "หนึ่งในสายพันธุ์สุนัขที่ใหญ่และหนักที่สุดในโลก สุภาพ สงบนิ่ง ซื่อสัตย์ ขนสั้นดูแลง่าย"
  },
  {
    "id": 66,
    "image": "https://www.postposmo.com/wp-content/uploads/2020/06/mastin-napolitano-12.jpg",
    "name": "เนเปิลทัน แมสติฟฟ์",
    "spaceNeeded": 5,
    "energy": 1,
    "grooming": 1,
    "experience": 5,
    "description": "ผิวหนังย่นหนา รูปร่างใหญ่โต น่าเกรงขาม เป็นสุนัขอารักขาบ้านชั้นยอด รักสงบแต่ปกป้องเต็มที่"
  },
  {
    "id": 67,
    "image": "https://image.dogilike.com/shareimg/contentimg/2013/meaw/Breeds/Boxer/1.jpg",
    "name": "บ็อกเซอร์",
    "spaceNeeded": 3,
    "energy": 5,
    "grooming": 1,
    "experience": 3,
    "description": "ร่าเริง สนุกสนาน พลังงานสูง ขี้เล่น เหมาะกับครอบครัวและเด็กๆ ขนสั้นดูแลง่ายมาก"
  },
  {
    "id": 68,
    "image": "https://cdn.ennxo.com/uploads/products/640/9bc6e4bbb6524adb842c63e743f60849.jpg",
    "name": "โดโกอาร์เจนติโน",
    "spaceNeeded": 5,
    "energy": 5,
    "grooming": 1,
    "experience": 5,
    "description": "สุนัขล่าสัตว์ใหญ่ตัวสีขาว แข็งแรง กล้ามเนื้อแน่น กล้าหาญ ต้องการการฝึกและการเข้าสังคมอย่างจริงจัง"
  },
  {
    "id": 69,
    "image": "https://animalmarket.ma/wp-content/uploads/2025/07/Copie-de-Sans-titre-1070x510.jpg",
    "name": "คานคัล",
    "spaceNeeded": 5,
    "energy": 3,
    "grooming": 1,
    "experience": 5,
    "description": "สุนัขอารักขาฝูงสัตว์จากตุรกี แรงกัดมหาศาล ตัวใหญ่ แข็งแกร่ง สุขุม และซื่อสัตย์ต่อเจ้าของ"
  },
  {
    "id": 70,
    "image": "https://st3.depositphotos.com/8776626/35076/i/450/depositphotos_350767812-stock-photo-anatolian-shepherd-dog-coban-kopegi.jpg",
    "name": "อนาโทเลียน เชเพิร์ด ด็อก",
    "spaceNeeded": 5,
    "energy": 3,
    "grooming": 1,
    "experience": 5,
    "description": "สายพันธุ์ตระกูลเดียวกับคานคัล มีความทนทานต่อสภาพอากาศสูง รักอิสระ ป้องกันภัยได้ยอดเยี่ยม"
  },
  {
    "id": 71,
    "image": "https://png.pngtree.com/png-clipart/20231218/original/pngtree-belgian-shepherd-tervuren-puppy-dog-photo-png-image_13869296.png",
    "name": "เบลเจียน เชเพิร์ด",
    "spaceNeeded": 5,
    "energy": 5,
    "grooming": 3,
    "experience": 5,
    "description": "สุนัขต้อนสัตว์ตระกูลเบลเจียน ฉลาด ปราดเปรียว ซื่อสัตย์ และมีพลังงานสูงมาก ต้องการการออกกำลังกายและการฝึกฝนสม่ำเสมอ"
  },
  {
    "id": 72,
    "image": "https://image.dogilike.com/shareimg/contentimg/2013/prig/Breed/dims_vetstreet_com(1).jpg",
    "name": "โอลด์ อิงลิช ชีปด็อก",
    "spaceNeeded": 5,
    "energy": 3,
    "grooming": 5,
    "experience": 3,
    "description": "สุนัขตัวโตขนฟูหนาบังตา อารมณ์ดี ขี้เล่น อ่อนโยนกับเด็กๆ แต่ต้องหมั่นแปรงขนและตัดแต่งเป็นประจำ"
  },
  {
    "id": 73,
    "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgheNsMSj2QAotfgIZjsalD9X50-QHOiHUU1DGPc8-3laOxU6HOJ1RDAm41LwsJoct8YWoppFVZ7zA2egAl7r06xRw1j1JOX0V9cZpmooOg8u9z1gvMwwVxIAufDXgaPgTfHzVIyAx_J8k/s1600/Collie.jpg",
    "name": "โคลลี",
    "spaceNeeded": 5,
    "energy": 3,
    "grooming": 5,
    "experience": 3,
    "description": "สุนัขต้อนสัตว์สง่างาม ฉลาด สุภาพ ซื่อสัตย์ เข้ากับครอบครัวได้ดี มีทั้งชนิดขนยาวสวยงามและขนสั้นเรียบ"
  },
  {
    "id": 74,
    "image": "https://image.dogilike.com/shareimg/contentimg/2013/prig/Breed/billy-the-shetland-sheepdog_33884_2009-09-05_w450.jpg",
    "name": "เชตแลนด์ ชีปด็อก",
    "spaceNeeded": 3,
    "energy": 3,
    "grooming": 5,
    "experience": 3,
    "description": "คล้ายโคลลีขนาดจิ๋ว ฉลาดเป็นอันดับต้นๆ ว่าว่างว่าง่าย ตื่นตัว ขนหนาฟูต้องการการดูแลแปรงขนบ่อยๆ"
  },
  {
    "id": 75,
    "image": "https://image.dogilike.com/shareimg/contentimg/2013/pungpond/6-9/BH81.jpg",
    "name": "บลัดฮาวด์",
    "spaceNeeded": 5,
    "energy": 3,
    "grooming": 1,
    "experience": 3,
    "description": "จมูกดีที่สุดในโลก หูยาว ใบหน้าย่น สุภาพ อ่อนโยน ชอบเดินสะแกนกลิ่น และขี้เกียจเล็กน้อย"
  },
  {
    "id": 76,
    "image": "https://www.purina.co.th/sites/default/files/2025-07/BREED%2520Hero_0062_greyhound.jpg",
    "name": "เกรย์ฮาวนด์",
    "spaceNeeded": 5,
    "energy": 3,
    "grooming": 1,
    "experience": 1,
    "description": "ลมกรดแห่งโลกสุนัข ตัวสูงเพรียว วิ่งเร็วมาก แต่เมื่ออยู่อาศัยในบ้านกลับสงบ นอนเก่ง ขนสั้นดูแลง่าย"
  },
  {
    "id": 77,
    "image": "https://media.istockphoto.com/id/487576070/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AA%E0%B8%B8%E0%B8%99%E0%B8%B1%E0%B8%82%E0%B8%9E%E0%B8%B1%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C%E0%B9%81%E0%B8%97%E0%B9%89-weimaraner-%E0%B8%81%E0%B8%A5%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%88%E0%B9%89%E0%B8%87%E0%B9%83%E0%B8%99%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%8A%E0%B8%B2%E0%B8%95%E0%B8%B4.jpg?s=612x612&w=0&k=20&c=nv5M64mhWURIQa7KbjECUIU1w41lw00epXxqopKKv88=",
    "name": "ไวมาราเนอร์",
    "spaceNeeded": 5,
    "energy": 5,
    "grooming": 1,
    "experience": 3,
    "description": "ฉายา 'ภูตสีเทา' ขนสั้นสีเทาสูงโปร่ง พลังงานล้นเหลือ ฉลาด ติดเจ้าของมาก ต้องการการออกกำลังกายหนัก"
  },
  {
    "id": 78,
    "image": "https://www.shutterstock.com/image-photo/vizsla-puppy-on-green-grass-260nw-2549554669.jpg",
    "name": "วิซสลา",
    "spaceNeeded": 5,
    "energy": 5,
    "grooming": 1,
    "experience": 3,
    "description": "สุนัขล่าสัตว์จากฮังการี ขนสีน้ำตาลทอง รูปร่างสง่างาม พลังงานสูง ติดเจ้าของเหมือนเงาตามตัว"
  },
  {
    "id": 79,
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/da/%282%29_Irish_Wolfhound_4.jpg?utm_source=th.wikipedia.org&utm_campaign=index&utm_content=original",
    "name": "ไอร์ริช วูล์ฟฮาวนด์",
    "spaceNeeded": 5,
    "energy": 3,
    "grooming": 3,
    "experience": 3,
    "description": "สุนัขที่สูงที่สุดพันธุ์หนึ่ง ขนหยาบ ใจดี อ่อนโยน สงบนิ่ง สุภาพกับทุกคน แต่ต้องการพื้นที่กว้างขวาง"
  },
  {
    "id": 80,
    "image": "https://media.istockphoto.com/id/1049396800/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AA%E0%B8%B8%E0%B8%99%E0%B8%B1%E0%B8%82%E0%B8%9E%E0%B8%B1%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C%E0%B8%A3%E0%B8%B1%E0%B8%AA%E0%B9%80%E0%B8%8B%E0%B8%B5%E0%B8%A2%E0%B9%81%E0%B8%9A%E0%B8%A5%E0%B9%87%E0%B8%84%E0%B9%80%E0%B8%97%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2.jpg?s=612x612&w=0&k=20&c=5-0R-ZkIuD0s0zdQ2_rt2ftYwhLoTzkn0gwjUYW4GAw=",
    "name": "แบล็กรัชเชียน เทอร์เรียร์",
    "spaceNeeded": 5,
    "energy": 3,
    "grooming": 5,
    "experience": 5,
    "description": "ยักษ์ใหญ่สีดำทรงพลัง อารักขาได้ยอดเยี่ยม ฉลาด มั่นใจ หวงถิ่น ขนหนาหยักศกต้องได้รับการดูแลตัดแต่ง"
  },
  
  {
    "id": 81,
    "image": "https://img.kapook.com/u/2019/Jarosphan/Pet/Dog/154/010.jpg",
    "name": "ไทยบางแก้ว",
    "spaceNeeded": 3,
    "energy": 5,
    "grooming": 3,
    "experience": 5,
    "description": "สุนัขพันธุ์ไทยแท้ ดุ หวงถิ่น ซื่อสัตย์ต่อเจ้าของ กล้าหาญ พลังงานสูง ต้องการผู้เลี้ยงที่ฝึกฝนอย่างจริงจัง"
  },
  {
    "id": 82,
    "image": "https://www.lib.ru.ac.th/journal2/wp-content/uploads/2013/11/thai-ridgeback-dog-%E0%B9%81%E0%B8%A1%E0%B9%88%E0%B8%9B%E0%B8%B2%E0%B8%A27.jpg",
    "name": "ไทยหลังอาน",
    "spaceNeeded": 3,
    "energy": 5,
    "grooming": 1,
    "experience": 5,
    "description": "เอกลักษณ์อานขนย้อนบนหลัง ฉลาด ปราดเปรียว รักอิสระ อารักขาได้ดี ขนสั้นดูแลง่ายมาก"
  },
  {
    "id": 83,
    "image": "https://previews.123rf.com/images/aspartame/aspartame1609/aspartame160900009/65646680-thai-mixed-breed-dog-on-cement-floor.jpg",
    "name": "หมาไทยทาง (สุนัขพันธุ์ทางพื้นบ้านไทย)",
    "spaceNeeded": 3,
    "energy": 3,
    "grooming": 1,
    "experience": 1,
    "description": "แข็งแรง สุขภาพดี ทนทานต่อสภาพอากาศไทย เลี้ยงง่าย ปรับตัวเก่ง ซื่อสัตย์ และเฝ้าบ้านได้ดี"
  },
  {
    "id": 84,
    "image": "https://t3.ftcdn.net/jpg/02/54/90/14/360_F_254901497_qTycTxP7sTja57BYPYmTeonuWW1cbEoI.jpg",
    "name": "อะแลสกัน คลีไค",
    "spaceNeeded": 1,
    "energy": 5,
    "grooming": 3,
    "experience": 3,
    "description": "ฮัสกีไซส์จิ๋ว ฉลาด ฉับไว ตื่นตัวสูง ร่าเริง ชอบอยู่กับเจ้าของแต่จะระวังตัวกับคนแปลกหน้า"
  },
  {
    "id": 85,
    "image": "https://image.dogilike.com/shareimg/contentimg/2013/meaw/Breeds/Basenji/2.jpg",
    "name": "บาเซนจี",
    "spaceNeeded": 1,
    "energy": 5,
    "grooming": 1,
    "experience": 3,
    "description": "ฉายา 'สุนัขไม่เห่า' รักความสะอาดเหมือนแมว ขนสั้น ฉลาด ปราดเปรียว พลังงานสูง และมีความเป็นตัวของตัวเอง"
  },
  {
    "id": 86,
    "image": "https://pettocute.com/storage/2022/07/courtney-wentz-UERY_7oYW6w-unsplash-_1__1.webp",
    "name": "ออสเตรเลียน แคตเทิล ด็อก",
    "spaceNeeded": 5,
    "energy": 5,
    "grooming": 1,
    "experience": 5,
    "description": "สุนัขต้อนวัวออสเตรเลีย อึด ทนทาน ฉลาดมาก พลังงานล้นเหลือ ต้องการงานหรือกิจกรรมให้ทำตลอดเวลา"
  },
  {
    "id": 87,
    "image": "https://t3.ftcdn.net/jpg/02/23/50/64/360_F_223506474_zJ7xH7UpS3TdT5SGHShCb7Uwc3PCwUil.jpg",
    "name": "ออสเตรเลียน เคลพี",
    "spaceNeeded": 5,
    "energy": 5,
    "grooming": 1,
    "experience": 5,
    "description": "สุนัขต้อนแกะพลังงานสูง วิ่งไว ฉลาด อิสระ และพร้อมทำงานกลางแจ้ง ต้องการการออกกำลังกายหนัก"
  },
  {
    "id": 88,
    "image": "https://img.magnific.com/premium-photo/russian-toy-terrier-thoroughbred-dog_564276-10043.jpg",
    "name": "รัสเซียน ทอย",
    "spaceNeeded": 1,
    "energy": 3,
    "grooming": 1,
    "experience": 1,
    "description": "ตัวเล็กจิ๋ว ร่าเริง กระฉับกระเฉง ติดเจ้าของ เหมาะกับการเลี้ยงในคอนโด มีทั้งชนิดขนสั้นและขนยาว"
  },
  {
    "id": 89,
    "image": "https://image.dogilike.com/shareimg/contentimg/2013/prig/Breed/japanesechinf1.jpg",
    "name": "แจพานีส ชิน",
    "spaceNeeded": 1,
    "energy": 1,
    "grooming": 3,
    "experience": 1,
    "description": "สุนัขราชสำนักญี่ปุ่น ตัวเล็ก สุภาพ สง่างาม อารมณ์ดี ชอบนอนตัก ปรับตัวเข้ากับคอนโดได้ดีมาก"
  },
  {
    "id": 90,
    "image": "https://static.wixstatic.com/media/c6a3da_306b4c045fe4453fb022fc43d4cae855~mv2.png/v1/fill/w_1110,h_1110,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c6a3da_306b4c045fe4453fb022fc43d4cae855~mv2.png",
    "name": "แจพานีส เทอร์เรียร์",
    "spaceNeeded": 1,
    "energy": 3,
    "grooming": 1,
    "experience": 1,
    "description": "สุนัขตัวเล็กจากญี่ปุ่น หัวสีดำ/น้ำตาล ตัวสีขาว ขนสั้น นุ่ม เรียบ ร่าเริง และประจบเก่ง"
  },
  
  {
    "id": 91,
    "image": "https://img.kapook.com/image/_81177202.jpg",
    "name": "ลาซา แอปโซ",
    "spaceNeeded": 1,
    "energy": 1,
    "grooming": 5,
    "experience": 3,
    "description": "สุนัขเฝ้าอารามหลวงจากทิเบต ขนยาวสลวยสวยงาม มั่นใจ รักสงบ ซื่อสัตย์ และต้องการการดูแลขนเป็นประจำ"
  },
  {
    "id": 92,
    "image": "https://pic.marketdogs.com/images/2019/02/02/dog-3684791_640.jpg",
    "name": "พาร์ซัน แจ็ครัสเซลล์ เทอร์เรียร์",
    "spaceNeeded": 3,
    "energy": 5,
    "grooming": 1,
    "experience": 5,
    "description": "ขาสูงกว่าแจ็ครัสเซลล์ทั่วไปเล็กน้อย พลังงานสูง ตื่นตัว ปราดเปรียว ชอบไล่จับ และต้องการเวลาออกกำลังกายหนัก"
  },
  {
    "id": 93,
    "image": "https://image.dogilike.com/shareimg/contentimg/2020/aomsin_/Ranking/7-24/shutterstock_1078824218-1024x683.jpg",
    "name": "อเมริกัน เอสกิโม ด็อก",
    "spaceNeeded": 1,
    "energy": 3,
    "grooming": 5,
    "experience": 1,
    "description": "ขนสีขาวหนาฟู ฉลาด เรียนรู้ไว ร่าเริง ชอบร่วมกิจกรรมกับครอบครัว ขนหนาต้องหมั่นแปรงบ่อยๆ"
  },
  {
    "id": 94,
    "image": "https://www.purina.co.th/sites/default/files/2025-07/BREED%2520Hero_0009_beagle_0%20%281%29.jpg",
    "name": "บีเกิล-ฮาร์เรียร์",
    "spaceNeeded": 3,
    "energy": 5,
    "grooming": 1,
    "experience": 3,
    "description": "ขนาดตัวอยู่ระหว่างบีเกิลและฮาร์เรียร์ ดมกลิ่นเก่ง แอคทีฟ ชอบวิ่งเล่นกลางแจ้ง ขนสั้นดูแลง่าย"
  },
  {
    "id": 95,
    "image": "https://image.dogilike.com/shareimg/contentimg/2013/prig/Breed/Keeshond_Majic_standing_cropped.jpg",
    "name": "เคออนดอนด์",
    "spaceNeeded": 3,
    "energy": 3,
    "grooming": 5,
    "experience": 1,
    "description": "มีวงแว่นตารอบดวงตาเป็นเอกลักษณ์ ขนหนาฟู อารมณ์ดี ฉลาด ติดเจ้าของ เหมาะกับสุนัขครอบครัว"
  },
  {
    "id": 96,
    "image": "https://image.dogilike.com/shareimg/contentimg/nuna/jat_vg.jpg",
    "name": "ปอร์ตุกีส วอเตอร์ ด็อก",
    "spaceNeeded": 3,
    "energy": 5,
    "grooming": 5,
    "experience": 3,
    "description": "สุนัขทำงานในน้ำ ชอบว่ายน้ำมาก ฉลาด พลังงานสูง ขนหยิกแน่นร่วงน้อยแต่ต้องเข้าร้านตัดแต่งทรง"
  },
  {
    "id": 97,
    "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7d/Ygor_Raiza.jpg/500px-Ygor_Raiza.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    "name": "ฟลานเดอร์ บูวีเย",
    "spaceNeeded": 5,
    "energy": 3,
    "grooming": 5,
    "experience": 5,
    "description": "สุนัขต้อนสัตว์ร่างใหญ่ รูปร่างบึกบึน มีเคราและหนวดหนา สุขุม ปกป้องครอบครัวได้ดีเยี่ยม"
  },
  {
    "id": 98,
    "image": "https://image.dogilike.com/shareimg/contentimg/nuna/komondor_1.jpg",
    "name": "คอมอนดอร์",
    "spaceNeeded": 5,
    "energy": 3,
    "grooming": 5,
    "experience": 5,
    "description": "สุนัขต้อนฝูงสัตว์เอกลักษณ์ขนเกลียวเชือกสีขาว ตัวใหญ่ หวงถิ่นฐานสูง ต้องการผู้เลี้ยงที่มีประสบการณ์"
  },
  {
    "id": 99,
    "image": "https://image.dogilike.com/shareimg/contentimg/nut_2/Lifestyle/Puli/3colorsPuli.jpg",
    "name": "พูลิ",
    "spaceNeeded": 3,
    "energy": 5,
    "grooming": 5,
    "experience": 5,
    "description": "ฉายา 'ม็อบถูพื้น' ตัวเล็กลงมาจากคอมอนดอร์ ขนถักเกลียวแน่น ปราดเปรียว ฉลาด พลังงานสูงมาก"
  },
  {
    "id": 100,
    "image": "https://www.dailypaws.com/thmb/pGvE7m6X9g3DZADGcGZnlGERHx4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Beauceron-sitting-fence-573817693-2000-a99e22919fc042d88b96e991dd3c4e7b.jpg",
    "name": "โบซรง / เบือเซรอน",
    "spaceNeeded": 5,
    "energy": 5,
    "grooming": 1,
    "experience": 5,
    "description": "สุนัขต้อนสัตว์จากฝรั่งเศส ตัวใหญ่ กล้ามเนื้อแน่น ฉลาด มั่นใจ อารักขาเก่ง และต้องการการฝึกสม่ำเสมอ"
  }
];
