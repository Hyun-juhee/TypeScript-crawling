export const response = {
    success: (resMessage: { status: number, message: string }, data: any = null) => {
        return {
            result: "success",
            status: resMessage.status,
            message: resMessage.message,
            data: data
        }
    },
    failure: (resMessage: { status: number, message: string }) => {
        return {
            result: "failure",
            status: resMessage.status,
            message: resMessage.message
        }
    }
};
