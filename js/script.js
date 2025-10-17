const keywords = [
  { law: "의료광고법", word: "완치", desc: "치료 효과를 단정하는 표현" },
  { law: "의료광고법", word: "100%", desc: "효과를 보장하는 표현" },
  { law: "약사법", word: "치료", desc: "화장품 등에 치료효과를 암시하는 표현" },
  { law: "약사법", word: "개선", desc: "의약품 오인 표현" },
  { law: "의료광고법", word: "즉시", desc: "즉각적인 효과 표현은 제한됨" },
  { law: "약사법", word: "완화", desc: "의약품 효능 오인 표현" },

  { law: "약사법", word: "리즈톡스", desc: "국산 / 국내산" },
  { law: "약사법", word: "원더톡스", desc: "국산 / 국내산" },
  { law: "약사법", word: "하이톡스", desc: "국산 / 국내산" },
  { law: "약사법", word: "뉴럭스", desc: "국산 / 국내산" },
  { law: "약사법", word: "보툴렉스", desc: "국산 / 국내산" },
  { law: "약사법", word: "이노톡스", desc: "국산 / 국내산" },
  { law: "약사법", word: "나보타", desc: "국산 / 국내산" },
  { law: "약사법", word: "코어톡스", desc: "국산 / 국내산" },
  { law: "약사법", word: "제오민", desc: "독일산" },
  { law: "약사법", word: "디스포트", desc: "영국산" },

  { law: "약사법", word: "브이올렛", desc: "데옥시콜산주사, DCA주사, DCA윤곽주사" },
  { law: "약사법", word: "벨라콜린", desc: "데옥시콜산주사, DCA주사, DCA윤곽주사" },

  { law: "약사법", word: "뉴아티", desc: "전문의약품 승인제품 히알루론산 주사로변경" },
  { law: "약사법", word: "히론트", desc: "전문의약품 승인제품 히알루론산 주사로변경" },

  { law: "약사법", word: "삭센다", desc: "GLP-1유사체~주사, 셀프주사, 자가주사" },

  { law: "약사법", word: "신데델라주사", desc: "성분명으로 표기 치옥트산 주사" },
  { law: "약사법", word: "백옥주사", desc: "성분명으로 표기 글루타치온 주사" },
  { law: "약사법", word: "은행엽주사", desc: "성분명으로 표기 징코 주사" },
  { law: "약사법", word: "태반주사", desc: "성분명으로 표기 자하거 추출물 주사" },
  { law: "약사법", word: "마늘주사", desc: "성분명으로 표기 푸르설티아민 주사" },
  { law: "약사법", word: "감초주사", desc: "성분명으로 표기 글리시리진 주사" },

  { law: "약사법", word: "샤넬주사", desc: "필로르가, 필메드135, NCTF135HA" },
  { law: "약사법", word: "샤넬 주사", desc: "필로르가, 필메드135, NCTF135HA" },

  { law: "약사법", word: "연어주사", desc: "PDRN주사" },

  { law: "의료광고법", word: "지방분해", desc: "지방융해, 지방감소" },

  { law: "의료광고법", word: "제거", desc: "정리, 청소, 감소, 지우기, 치료 등 주제에 맞춰 수정" },
  
  { law: "의료광고법", word: "안전한", desc: "100% 안정성 표현 금지, '안정성이 높은 편이다' 등 완곡 표현 사용" },
  
  { law: "의료광고법", word: "완성", desc: "100% 효과 보장 금지, 완곡 표현 사용" },
  { law: "의료광고법", word: "완벽", desc: "100% 효과 보장 금지, 완곡 표현 사용" },
  
  { law: "의료광고법", word: "탈바꿈", desc: "개선한다, 개선에 도움을 준다, 도움이 될 수 있다 등 완곡 표현 사용" },
  { law: "의료광고법", word: "변신", desc: "개선한다, 개선에 도움을 준다, 도움이 될 수 있다 등 완곡 표현 사용" },
  
  { law: "의료광고법", word: "절개없이", desc: "비절개, 절개가 불필요한 등 완곡 표현 사용" },
  
  { law: "의료광고법", word: "통증없이", desc: "통증 최소화, 적은 통증, 통증이 미미한 등 완곡 표현 사용" },
  { law: "의료광고법", word: "무통", desc: "통증 최소화, 적은 통증, 통증이 미미한 등 완곡 표현 사용" },
  
  { law: "의료광고법", word: "자극없이", desc: "자극 최소화, 자극이 적다, 자극이 미미한 등 완곡 표현 사용" },
  { law: "의료광고법", word: "무자극", desc: "자극 최소화, 자극이 적다, 자극이 미미한 등 완곡 표현 사용" },
  
  { law: "의료광고법", word: "손상없이", desc: "손상 최소화, 손상이 적다, 거의 손상시키지 않는 등 완곡 표현 사용" },
  
  { law: "의료광고법", word: "부작용없는", desc: "부작용 없는 시술은 없음, 완곡 표현 사용" },
  
  { law: "의료광고법", word: "해결", desc: "과장된 효과 어필, 완곡 표현 사용" },
  { law: "의료광고법", word: "해답", desc: "과장된 효과 어필, 완곡 표현 사용" },
  { law: "의료광고법", word: "정답", desc: "과장된 효과 어필, 완곡 표현 사용" },
  { law: "의료광고법", word: "이별", desc: "과장된 효과 어필, 완곡 표현 사용" },
  { law: "의료광고법", word: "안녕", desc: "과장된 효과 어필, 완곡 표현 사용" },
  { law: "의료광고법", word: "빠이", desc: "과장된 효과 어필, 완곡 표현 사용" }

];

// 버튼 클릭 시 검사 실행
function checkText() {
  const inputArea = document.getElementById("inputText");
  const resultDiv = document.getElementById("result");
  let inputText = inputArea.value;

  if (!inputText.trim()) {
    resultDiv.innerHTML = "<p>⚠️ 문구를 입력해주세요.</p>";
    return;
  }

  let found = [];
  let highlightedText = inputText;

  // 금지 단어 찾기
  keywords.forEach(k => {
    const regex = new RegExp(k.word, "g"); // 전역 검색
    if (regex.test(highlightedText)) {
      found.push(k);
      // 하이라이트 적용
      highlightedText = highlightedText.replace(regex, `<span style="background-color:#f8d7da;color:#721c24;font-weight:bold;">${k.word}</span>`);
    }
  });

  // 결과 출력
  let html = `<p>입력 문구 미리보기:</p><p>${highlightedText}</p>`;

  if (found.length > 0) {
    html += `<p class="warning">🚨 위반 가능성이 있는 표현이 발견되었습니다:</p><ul>`;
    found.forEach(k => {
      html += `<li><b>[${k.law}]</b> "${k.word}" → 권장: ${k.desc}</li>`;
    });
    html += "</ul>";
  } else {
    html += `<p class="safe">✅ 위반 단어가 발견되지 않았습니다.</p>`;
  }

  resultDiv.innerHTML = html;
}