import React from "react";


function Regi() {
  return (

    <div>
    
      <div>
        <div>
          <h2>기본정보</h2>
        </div>
        <div>
          <li>*필수항목</li>
        </div>
      </div>

      <div>
        <div>
          <h3>상품이미지* (0/12)</h3>
        </div>

        <div>
          <div>
            <button>이미지 등록</button>
          </div>
        </div>

        <div>
          <li>상품 이미지는 PC에서는 1:1, 모바일에서는 1:1.23 비율로 보여져요.</li>
        </div>
      </div>

      <div>
        <div>
          <h3>상품명*</h3>
        </div>
        <div> 채팅치는칸 만들기 </div>
      </div>
    
      <div>
        <div>
          <h3>카테고리*</h3>
        </div>
        <div>
          <div>

          </div>

          <div>

          </div>

          <div>

          </div>
        </div>
        <div>
          <li>선택한 카테고리:</li>
        </div>
      </div>

      <div>
        <div>
          <h3>거래지역*</h3>
        </div>

        <div>
          <button>내 위치</button>
          <button>최근 지역</button>
          <button>주소 검색</button>
          <button>지역설정안함</button>
        </div>
        <div>
          상세주소 넣는칸
        </div>
      </div>

      <div>
        <div>
          <h3>상품상태*</h3>
        </div>
        <div>
          <li> 새 상품(미사용) 사용하지 않은 새 상품</li>
          <li>사용감 없음 사용은 했지만 눈에 띄는 흔적이나 얼룩이 없음</li>
          <li>사용감 적음 눈에 띄는 흔적이나 얼룩이 약간 있음</li>
          <li>시영감 많음 눈에 띄는 흔적이나 얼룩이 많이 있음</li>
          <li>고장/파손 상품 기능 이상이나 외관 손상등으로 수리/수선필요</li>
        </div>
      </div>

      <div>
        <div>
          <h3>교환*</h3>
        </div>
        <div>
          <input type='checkbox' name='whether' value='no' />불가
          <input type='checkbox' name='whether' value='yes' />가능
        </div>
      </div>

      <div>
        <div>
          <h3>가격*</h3>
        </div>
        <div>
          가격입력
        </div>
        <div>
          <input type='checkbox' name='propose.' value='yes2' />가격제안 받기
        </div>
      </div>

      <div>
        <div>
          <h3>배송비*</h3>
        </div>
        <div>
          <input type='checkbox' name='shipping_price' value='including' />배송비 포함
          <input type='checkbox' name='shipping_price' value='separate' />배송비 별도
        </div>
      </div>

      <div>
        <div>
          <h3>설명</h3>
        </div>
        <div>
          설명 네모칸
        </div>
        <li>혹시 카카오톡ID를 적으셨나요?</li>
      </div>

      <div>
        <div>
          <h3>태그</h3>
        </div>
        <div>
          태그 넣는칸 만들기
        </div>
        <div>
          <li>- 태그를 띄어쓰기로 구분되며 최대 9자까지 입력할 수 있어요.</li>
          <li>- 내 상품을 다양한 태그로 표현해 보세요.</li>
          <li>- 사람들이 내 상품을 더 잘 찾을 수 있어요.</li>
          <li>- 상품과 관련 없는 태그를 입력할 경우, 판매에 제재를 받을 수 있어요.</li>
        </div>
      </div>

      <div>
        <div>
          <h3>수량</h3>
        </div>
        <div>객수 넣는 칸 제작</div>
      </div>

      <div>
        <div>
          <h2>빠른 판매</h2>
        </div>
        <div>
          <h3>안전결제 환영</h3>
        </div>
      </div>

      <div>
        <li>안전결제(번개페이) 요청을 거절하지 않는 대신 혜택을 받을 수 있어요.</li>
        <li>내 상품을 먼저 보여주는 전용 필터로 더 빠르게 판매할 수 있어요.</li>
        <li>번개페이 배지로 더 많은 관심을 받을 수 있어요.</li>
      </div>
      <div>
        <li> 거절 시, 이용 제재가 있을 수 있으니 주의해 주세요.</li>
        <li>번개페이 배지와 전용 필터 기능은 앱 또는 모바일 웹에서만 볼 수 있어요.</li>
      </div>

      <div>
        <button>임시저장</button>
        <button>등록하기</button>
      </div>

    </div>



    );
  }
  
  export default Regi;