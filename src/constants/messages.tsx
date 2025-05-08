import { Bot, User as Ic_User, Settings } from 'lucide-react'

export const MSG = {
  SIN_IN_SUCCESS: '로그인에 성공했어요',
  SIGN_IN_FAIL: '아이디 또는 비밀번호가 틀렸어요',
  UNKNOWN_ERROR: '문제가 발생했어요. 잠시 후 다시 시도해주세요',
}

//@TODO 위처럼 간단하게 만들 수 없을까?
export const DEFAULT_ERROR_MESSAGE = {
  title: '오류',
}
export const SIGN_IN_ERROR_MESSAGE = {
  title: '로그인 실패',
}
export const AUTH_USER_ERROR_MESSAGE = {
  title: '사용자 로드 실패',
}
export const SIGN_UP_ERROR_MESSAGE = {
  title: '회원 가입 실패',
}
export const SAVE_ERROR_MESSAGE = {
  title: '저장 실패',
}
export const menuItems = {
  USER: [
    {
      id: 'settings',
      name: '앱 관리',
      icon: <Settings className="h-5 w-5" />,
      path: '/app-management',
    },
    {
      id: 'account',
      name: '계정 관리',
      icon: <Ic_User className="h-5 w-5" />,
      path: '/account',
    },
    {
      id: 'ai-agent',
      name: 'AI 에이전트',
      icon: <Bot className="h-5 w-5" />,
      path: '/ai-agent',
    },
  ],
  ADMIN: [
    // {
    //   id: 'app-management',
    //   name: '앱 관리',
    //   icon: <Settings className="h-5 w-5" />,
    //   path: '/_admin/dashboard/app-management',
    // },
  ],
}

export const MODAL_MESSAGE = {
  delete: {
    title: '삭제할까요?',
    description: '삭제 후 정보를 복구할 수 없어요',
    buttonText: '삭제하기',
    buttonText2: '다음에 할게요',
    // icon: DeleteIc,
    showSecondButton: true,
  },
  done: {
    title: '마감',
    description: '종료되었습니다.',
    buttonText: '홈으로 가기',
    // icon: DoneIC,
    showSecondButton: false,
  },
  writing: {
    title: '작성 중인 내용이 있어요!',
    description: '이어서 작성하시겠어요?',
    buttonText: '이어쓰기',
    // icon: WritingIC,
    showSecondButton: false,
  },
}
