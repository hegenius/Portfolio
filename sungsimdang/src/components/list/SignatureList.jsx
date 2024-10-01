import {createContext, useContext} from "react";

const SignatureList = createContext();

export const ItemProvider = ({ children }) => {
  const items = [
    {id: 1,
      title: '맷돌로갈은 통밀빵',
      content:'통밀을 직접 갈아 유기농 밀가루와 섞고 고소한 호두를 듬뿍 넣은 건강한 통밀빵',
      image: 'https://sungsimdang.co.kr/data/file/main_signature/1794428356_w5AIHRu3_1e34cf83121daae65a8c646727eb96eac811db42.jpg'},
    {id: 2,
      title: '명란바게트',
      content:'한국 최고의 명장이 만든 덕화명란을 가득 채운 빠삭한 바게트',
      image: 'https://sungsimdang.co.kr/data/file/main_signature/1794428356_L1zx2WQt_2713171d642a266d7dd998246420067cac3dcf16.jpg'},
    {id: 3,
      title: '튀김소보로',
      content:'1980년 탄생한 소보로, 앙금빵, 도넛의 3단 합체빵 성심당 NO.1',
      image: 'https://sungsimdang.co.kr/data/file/main_signature/1794428356_va0YSjMs_a2195fadc6c727ef8dd57388cccccaf6fb4ac829.jpg'},
    {id: 4,
      title: '보문산메아리',
      content:'촉촉한 페스츄리가 돌돌 말려 보문산의 메아리가 된 대전 시민을 위한 빵',
      image: 'https://sungsimdang.co.kr/data/file/main_signature/1794428356_I5gyNzKC_42d528ef3bd59d9eb83ecf97b7c3d89a39bd15af.jpg'},
    {id: 5,
      title: '대전부르스만주',
      content:'밤.황남.검은깨.유자.호박.고구마의 6가지 재료를 손수 빚어 정성을 전하는 귀한 선물',
      image: 'https://sungsimdang.co.kr/data/file/main_signature/1794428356_Y32XVMps_b2749d774be1127212e9b197d112b0c714ff1b3e.jpg'},
    {id: 6,
      title: '대전부르스전병',
      content:'전통방식 그대로 한 장 한 장 구워내 고소함을 가득 담고 있는 진솔한 옛맛전병',
      image: 'https://sungsimdang.co.kr/data/file/main_signature/1794428356_Rkns8963_7b759d3888b8e9aa2fca6d3a26d99fb6226e54a0.jpg'},
    {id: 7,
      title: '대전부르스약과',
      content:'올곧은 재료, 깨끗한 기름으로 달지 않고 촉촉한 맛이 일품인 수제약과',
      image: 'https://sungsimdang.co.kr/data/file/main_signature/1794428356_XUCeKYVw_d3ab1f142f8fdb6e5085225fec2855a26f156abb.jpg'},
    {id: 8,
      title: '대전부르스떡',
      content:'100% 국산 통팥 국산 찹쌀에 호두를 듬뿍 넣어 성심당의 마음을 담은 대전부르스 떡',
      image: 'https://sungsimdang.co.kr/data/file/main_signature/1794428356_6wuLVjRB_735383b90ebe103239c83d83e47a5c0298cc089e.jpg'},
    {id: 9,
      title: '순도 99.99',
      content:'한국조폐공사 X 성심당이 순금의 고귀함과 향토기업 성심당의 순정을 담은 피낭시에',
      image: 'https://sungsimdang.co.kr/data/file/main_signature/1794428356_ciDW30pN_0b596edb99cbb680e011337c824499b29988c318.jpg'},
    {id: 10,
      title: '순수롤',
      content:'부드러운 카스테라와 순우유 생크림의 클래식한 조화. 성심당 케익부띠끄 시그니쳐',
      image: 'https://sungsimdang.co.kr/data/file/main_signature/1794428356_AnGfIwe5_2e370816b6c52dad258119d824558a6a3f2071b2.jpg'},
    {id: 11,
      title: '순수마들렌',
      content:'우유 듬뿍. 콩 두알의 매력에 순수함까지 담아 보들보들한 모든이의 간식',
      image: 'https://sungsimdang.co.kr/data/file/main_signature/1794428356_gf0JuKFN_c8474fcd29f483baac919967befb4098180344f4.jpg'},
    {id: 12,
      title: '딸기밭과수원길',
      content:'시트사이 가득한 생딸기와 100% 순우유 생크림으로 만든 케익부띠끄 오리지널 인기 케이크',
      image: 'https://sungsimdang.co.kr/data/file/main_signature/1794428356_TNe6QnuE_d144bb0ff4bcd8c3a2b70fdba0916f6f2bc0ef9e.jpg'},
  ];

  return (
    <SignatureList.Provider value={items}>
      {children}
    </SignatureList.Provider>
  );
};

export const useItems = () => {
  return useContext(SignatureList);
};