export const message = {
    // CRUD
    READ_SUCCESS: {
        message: "데이터 조회 성공",
        status: 200,
    },
    SAVE_SUCCESS: {
        message: "데이터 저장 성공",
        status: 201,
    },
    UPDATE_SUCCESS: {
        message: "데이터 수정 성공",
        status: 204
    },
    DELETE_SUCCESS: {
        message: "데이터 삭제 성공",
        status: 204
    },
    DELETE_FAIL: {
        message: "데이터 삭제 실패",
        status: 444
    },

    // 응답 메시지
    NULL_VALUE: {
        message: "Params나 Body 중 필수적으로 입력해야 하는 값인데, 입력하지 않은 값(NULL)이 존재합니다.",
        status: 400
    },
    WRONG_PARAMS: {
        message: "Params나 Body에 잘못된 값이 입력되어서 조회(or 쓰기 or 수정 or 삭제)할 데이터가 없습니다.",
        status: 401
    },

    // 서버 에러 (보안상 자세히 적지 않음)
    INTERNAL_SERVER_ERROR: {
        message: "서버 측에서 발생한 에러입니다.",
        status: 500
    },

    // 토큰 & API KEY (600번대)
    EXPIRED_TOKEN: {
        message: "토큰이 만료되었습니다.",
        status: 600
    },
    INVALID_TOKEN: {
        message: "유효하지 않은 토큰입니다.",
        status: 601
    },
    EMPTY_TOKEN: {
        message: "입력된 토큰이 없습니다.",
        status: 602
    },
    INVALID_REFRESH_TOKEN: {
        message: "적절하지 않은 Refresh Token이거나 다른 기기에서 해당 아이디로 로그인 했습니다.",
        status: 603
    },
    UPDATE_ACCESS_TOKEN: {
        message: "Access Token 재발급이 완료되었습니다.",
        status: 200
    },
    EMPTY_API_KEY: {
        message: "입력된 API_KEY가 없습니다.",
        status: 610
    },
    INVALID_API_KEY: {
        message: "유효하지 않은 API_KEY입니다.",
        status: 611
    },
    // 관리자 권한 관련
    ONLY_ADMIN_PERMISSION: {
        message: "관리자만 접근이 가능합니다.",
        status: 1100
    },

    // 파일 업로드 관련
    LIMIT_FILE_SIZE: {
        message: "파일 1개당 업로드 가능한 용량을 넘은 파일이 존재합니다.",
        status: 1300
    },

    // 버전 체크 관련
    ALLOWED_VERSION: {
        message: "이용 가능한 버전입니다.",
        status: 200
    },
    RECOMMEND_UPDATE_VERSION: {
        message: "업데이트를 권고합니다.",
        status: 1400
    }, 
    INVALID_VERSION: {
        message: "이용 가능하지 않은 버전입니다.",
        status: 1401
    },

    // API 요청 권한 관련
    INVALID_AUTHENTICATION: {
        message: "API에 접근할 때 필요한 값들이 부적절합니다.",
        status: 1600
    },
};