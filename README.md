## **Intor**

리액트 기반으로 제작한 포트폴리오입니다.

포트폴리오는 저를 소개를 하는 페이지라 내가 생각한 난 어떤 사람이고 뭘 좋아하는지를 먼저 생각을 하고 가장 좋아하는 색상인 핑크색 과 동글동글한 성격을 갖고 있는 저와 잘 어울리는 동그라미 컨셉으로 제작했습니다.

## **사용기술**

lang - styled-components , react

배포 - github

## **개발 기간**

총 14일 (부족한 부분은 수정중입니다.)

## **구현 기능**

 - 소개 문장 타이핑 애니메이션 적용

\- 원 모형이 시간차 랜덤으로 내려오게 애니메이션 적용

\- 프로젝트 이미지를 클릭을 하면 팝업이 나오는 형식

\- PC버전에서 스킬 이미지에 마우스 올리면 카드 뒤집는 애니메이션 적용  
  

\- emailjs 이용해서 폼 작성시 이메일 받고 작성자는 자동 회신 설정

---

#### 1) 문장 타이핑 애니메이션

<img src='https://github.com/josoyean/soyeon-portfolio/assets/31685570/9329c0c6-085f-4d78-bc41-689f34afd5da' />

타이핑 하고 싶은 문구를 지정하고 0.15초 마다 typing를 호출 한다. typing은 문구를 하나씩 넣어주는데 &가 있으면 줄바꿈 태그를 넣어 주면 되고 없으면 그 문자 그대로 값을 넣어 타이핑 효과를 줬습니다. 문구가 끝나면 초기화를 하고 다시 처음부터 작업 하게하면 된다.

#### 2) 시간차 랜덤으로 내려오게 애니메이션

<img src='https://github.com/josoyean/soyeon-portfolio/assets/31685570/788189a6-149f-4873-8804-275005471d12' />

[##_ImageGrid|kage@cpt7ku/btsGaYgl2yZ/rsoF4CnsX3qs9Tt5lzLVf1/img.png,kage@bcsApD/btsGbQWo9YV/HJTgqU0uJ6UUXTH5PL3kC0/img.png|data-is-animation="false" data-origin-width="1038" data-origin-height="914" data-filename="스크린샷 2024-03-28 오후 6.08.31.png" style="width: 45.5833%; margin-right: 10px;" data-widthpercent="46.12",data-is-animation="false" data-origin-width="674" data-origin-height="508" data-filename="스크린샷 2024-03-28 오후 6.09.01.png" data-widthpercent="53.88" style="width: 53.2539%;"|_##]

색상은 고정값으로 주고 map() 반복문을 이용해서 적용 하고 색상 순서, 시간, 위치는 Math.floor를 이용해서 랜덤으로 적용 

랜덤타임은 딜레이에 넣어주면 새로고침할때 마다 동일한 시간에 내려오지 않게 해준다. 랜덤 값은 StarContent 컴포넌트에 props를 전달해줬습니다. 

#### 3) 프로젝트 이미지를 클릭을 하면 팝업

[##_Image|kage@bw9HQH/btsGbFnd4OJ/bHraEq9RDZKdDiZIDbIxzk/img.gif|CDM|1.3|{"originWidth":1554,"originHeight":1544,"style":"alignCenter","width":427,"height":424,"filename":"ca87deac-4cc5-44bb-9f66-32a8f057555e.gif"}_##]

[##_ImageGrid|kage@NYpdj/btsGbGNdlDv/xMr95RxUkZtqsDaBR0Z3nK/img.png,kage@GAoDH/btsGbGzHKvs/Vx5W7qKDzSPbIUk8Scs4d0/img.png|data-is-animation="false" data-origin-width="890" data-origin-height="514" data-filename="스크린샷 2024-03-28 오후 6.25.20.png" style="width: 51.1557%; margin-right: 10px;" data-widthpercent="51.76",data-is-animation="false" data-origin-width="510" data-origin-height="316" data-filename="스크린샷 2024-03-28 오후 6.26.28.png" style="width: 47.6815%;" data-widthpercent="48.24"|_##]

내가 클릭한 프로젝트만 ture로 만들어 관한 정보를 팝업으로 보여준다. Array(갯수).fill(false) : 갯수대로 배열을 만들고 전부 false를 적용하고 선택한 프로젝트 index만 ture로 바꿔 팝업을 보여준다. selectItem && '' 은 selectItem가 true일때 PopupContent를 보여주는 작업입니다.  팝업 작업하면서 <Array(갯수).fill(false)> 이 개념을 알게 되었는데 map으로 하나씩 안바꿔도 되서 자주 사용할거같다.

팝업에 X 버튼 클릭하면 전부 false로 만들어 팝업을 닫아주게 한다. 여기에서 자식 컴포넌트가 2개가 필요해서 상태 관리가 힘들어 redex을 적용할 예정이다.

#### 4) 마우스 올리면 카드 뒤집는 애니메이션 적용

[##_Image|kage@o4fwj/btsGaAGM4jt/rFJZwKdzay0ejvUKwJeiVk/img.gif|CDM|1.3|{"originWidth":460,"originHeight":316,"style":"alignCenter","filename":"3e83b59b-f3be-4dd7-9ebc-7d15e53c6411.gif"}_##]

[##_ImageGrid|kage@dAVpTb/btsF91SduUp/w9Xa58Tbomco2fdYUegktk/img.png,kage@BTWji/btsF91q8j8w/v729NXvUTcjwHTQ4gYey5k/img.png|data-is-animation="false" data-origin-width="700" data-origin-height="701" data-filename="edited_스크린샷 2024-03-28 오후 6.48.26.png" width="309" data-widthpercent="43.74" style="width: 43.2314%; margin-right: 10px;",data-is-animation="false" data-origin-width="700" data-origin-height="545" data-filename="edited_스크린샷 2024-03-28 오후 6.48.26.png" style="width: 55.6058%;" data-widthpercent="56.26"|_##]

안보는 아이템은 화면에 안보이게 하고 마우스를 위에 올려놓으면 뒤는거 처럼 애니메이션을 주는데 뒤집게 되면 앞에 있었던건 안보이고 처음에 안보였던 뒷면 내용은 보이게 해주는 방식이다. 다른 기능과 다르게 css만 있으면 되는 기능이라 적용하기 쉽고 움직이는 스타일은 transdorm-style:preserve-3d 이용하면 뒤집을때 입체감을 줄수있다.

#### 5) emailjs 이용해서 폼 작성시 이메일 받고 작성자는 자동 회신 설정

[##_Image|kage@c9vnXk/btsF89KedRs/PVjAmsVcjFQbRBbZOYzBn0/img.png|CDM|1.3|{"originWidth":1752,"originHeight":1036,"style":"alignCenter","width":575,"height":340,"filename":"스크린샷 2024-03-28 오후 7.02.40.png"}_##]

[##_ImageGrid|kage@EeuaK/btsF9MOs7fk/np9UHCVEeBXqyDqog5KV81/img.png,kage@diR8aE/btsGcev2FZe/C5hg2iEItTRcidSQ6rwUqK/img.png|data-is-animation="false" data-origin-width="960" data-origin-height="576" data-filename="edited_스크린샷 2024-03-28 오후 7.04.54.png" data-widthpercent="57.57" style="width: 56.9003%; margin-right: 10px;",data-is-animation="false" data-origin-width="710" data-origin-height="578" data-filename="edited_스크린샷 2024-03-28 오후 7.04.43.png" data-widthpercent="42.43" style="width: 41.9369%;"|_##]

Email.js를 이용해서 포트폴리오 내에서 이메일 전송되도록 구현했습니다. 

메일을 전송되면 input,textarea를 초기화를 했습니다.
