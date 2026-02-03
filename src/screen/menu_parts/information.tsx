import Innerheader from "../innerheader";

export default function Imformation() {
  return (
    <div className="bg-base-color w-screen h-screen text-white overflow-y-auto">
      <Innerheader />
      <div className="max-w-[900px] mx-auto px-6 py-8">
        {/* 타이틀 */}
        <h1 className="text-[32px] md:text-[44px] font-bold mb-6 border-b-2 border-white pb-3">
          가위바위보 포커 개인정보 처리방침
        </h1>

        {/* 본문 전체 기본 글자 크기 */}
        <div className="text-[20px] leading-relaxed space-y-6">
          <p>
            가위바위보 포커(이하 “서비스”)는 이용자의 개인정보를 중요하게 여기며, 「개인정보 보호법」 등
            관련 법령을 준수합니다. 본 개인정보 처리방침은 서비스에서 어떤 개인정보를 어떻게 이용하고
            보호하는지 설명합니다.
          </p>

          <section>
            <h2 className="text-[22px] md:text-[24px] font-semibold mb-2">
              제1조 (수집하는 개인정보 항목 및 수집 방법)
            </h2>
            <p>1. 수집 항목: 닉네임, 아이디, 비밀번호 (그 외 정보는 수집하지 않습니다.)</p>
            <p>2. 수집 방법: 이용자가 회원 가입 화면에 직접 입력하는 방식으로 개인정보를 수집합니다.</p>
          </section>

          <section>
            <h2 className="text-[22px] md:text-[24px] font-semibold mb-2">
              제2조 (개인정보의 수집·이용 목적)
            </h2>
            <p className="mb-1">서비스는 수집한 개인정보를 다음의 목적 범위 내에서만 이용합니다.</p>
            <ul className="list-disc list-inside space-y-1">
              <li>회원 식별 및 로그인 기능 제공</li>
              <li>게임 이용 이력, 대전 기록, 친구 목록 등의 게임 데이터와 계정 연동</li>
              <li>중복 가입 방지, 부정 이용 방지 등 서비스 운영 및 관리</li>
              <li>이용자 문의 대응 및 서비스 품질 개선</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[22px] md:text-[24px] font-semibold mb-2">
              제3조 (개인정보의 보유 및 이용 기간)
            </h2>
            <p>
              1. 서비스는 원칙적으로 이용자가 회원 탈퇴를 요청하거나 개인정보의 수집·이용 목적이 달성된
              때에는 해당 정보를 지체 없이 파기합니다.
            </p>
            <p>
              2. 단, 관계 법령에서 일정 기간 정보 보관을 명시한 경우, 해당 기간 동안 예외적으로 보관할 수
              있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] md:text-[24px] font-semibold mb-2">
              제4조 (개인정보의 제3자 제공)
            </h2>
            <p>1. 서비스는 이용자의 개인정보를 원칙적으로 제3자에게 제공하지 않습니다.</p>
            <p>
              2. 다만, 법령에 특별한 규정이 있거나, 수사기관이 법령에 정해진 절차와 방법에 따라 요청하는
              경우 등 관계 법령에서 허용하는 경우에 한하여 예외적으로 제공할 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] md:text-[24px] font-semibold mb-2">
              제5조 (개인정보 처리의 위탁)
            </h2>
            <p>
              1. 서비스는 데이터 저장 및 처리, 안정적인 서비스 제공을 위하여 다음과 같이 개인정보 처리 업무를
              외부 서비스에 위탁할 수 있습니다.
            </p>
            <p>- 수탁업체: Supabase</p>
            <p>- 위탁 업무 내용: 회원 계정 정보 및 게임 데이터 저장, 데이터베이스 운영</p>
            <p>
              2. 서비스는 위탁 계약 체결 시 개인정보 보호법 등 관련 법령에 따라 개인정보가 안전하게 관리될 수
              있도록 필요한 조치를 취합니다.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] md:text-[24px] font-semibold mb-2">
              제6조 (이용자의 권리 및 행사 방법)
            </h2>
            <p>
              1. 이용자는 언제든지 서비스 내 계정 화면 등을 통하여 자신의 닉네임, 비밀번호 등 개인정보를
              열람·수정할 수 있습니다.
            </p>
            <p>
              2. 이용자는 회원 탈퇴 기능 또는 별도의 문의를 통하여 개인정보 삭제 및 처리정지를 요청할 수
              있습니다.
            </p>
            <p>3. 이용자가 개인정보의 정정 또는 삭제를 요청한 경우, 서비스는 지체 없이 필요한 조치를 수행합니다.</p>
          </section>

          <section>
            <h2 className="text-[22px] md:text-[24px] font-semibold mb-2">
              제7조 (개인정보의 파기 절차 및 방법)
            </h2>
            <p>
              1. 이용자가 회원 탈퇴를 요청하거나 개인정보 보유 기간이 경과한 경우, 해당 개인정보는 서비스
              운영을 위한 최소한의 범위를 제외하고 지체 없이 파기됩니다.
            </p>
            <p>
              2. 전자적 파일 형태의 정보는 복구가 불가능한 기술적 방법을 사용하여 삭제하며, 출력물 등은 파쇄
              또는 소각 등의 방법으로 파기합니다.
            </p>
          </section>

          <section>
            <h2 className="text-[22px] md:text-[24px] font-semibold mb-2">
              제8조 (개인정보의 안전성 확보 조치)
            </h2>
            <p className="mb-1">
              서비스는 이용자의 개인정보를 안전하게 관리하기 위하여 다음과 같은 보호 조치를 취하고 있습니다.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>개인정보에 대한 접근 권한을 최소한으로 부여하고, 관리자 계정 관리를 강화합니다.</li>
              <li>Supabase의 보안 정책 및 암호화 기능을 활용하여 데이터를 저장·관리합니다.</li>
              <li>개인정보 처리에 관한 내부 관리 기준을 마련하고, 필요 시 이를 지속적으로 보완·개선합니다.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[22px] md:text-[24px] font-semibold mb-2">
              제9조 (개인정보 보호책임자 및 연락처)
            </h2>
            <p>개인정보 보호와 관련한 이용자 문의를 처리하기 위하여 다음과 같이 개인정보 보호책임자를 지정합니다.</p>
            <p>- 개인정보 보호책임자: 박현준</p>
            <p>- 이메일: forwork1817@gmail.com</p>
          </section>

          <section className="pb-10">
            <h2 className="text-[22px] md:text-[24px] font-semibold mb-2">
              제10조 (개인정보 처리방침의 변경)
            </h2>
            <p className="mb-1">
              본 개인정보 처리방침은 관련 법령, 서비스 정책의 변경에 따라 수정될 수 있으며, 중요한 내용이
              변경되는 경우 <br/>서비스 내 공지를 통해 안내합니다.
            </p>
            <p>개인정보 처리방침 시행일자: 2026년 2월 3일</p>
          </section>
        </div>
      </div>
    </div>
  );
}
