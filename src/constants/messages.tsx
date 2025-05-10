/**
 * Message constants for the application
 *
 * This file contains various message strings used throughout the application.
 * Messages are organized by their purpose and context.
 */

// General messages
export const MSG = {
  SUCCESS: '성공했어요',
  FAIL: '실패했어요',
  UNKNOWN_ERROR: '문제가 발생했어요. 잠시 후 다시 시도해주세요',
}

// Error messages
export const ERROR_MESSAGES = {
  DEFAULT: {
    title: '오류',
  },
  AUTH: {
    title: '인증 실패',
  },
  SAVE: {
    title: '저장 실패',
  },
}

// Modal messages
export const MODAL_MESSAGES = {
  DELETE: {
    title: '삭제할까요?',
    description: '삭제 후 정보를 복구할 수 없어요',
    buttonText: '삭제하기',
    buttonText2: '다음에 할게요',
    showSecondButton: true,
  },
  DONE: {
    title: '마감',
    description: '종료되었습니다.',
    buttonText: '홈으로 가기',
    showSecondButton: false,
  },
  WRITING: {
    title: '작성 중인 내용이 있어요!',
    description: '이어서 작성하시겠어요?',
    buttonText: '이어쓰기',
    showSecondButton: false,
  },
}
