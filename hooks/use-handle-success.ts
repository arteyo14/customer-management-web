import HttpStatusCode from '@/types/constant/http-status-code';
import { ICallback } from '@/types/constant/toats';
import { toast } from 'sonner';

const mapStatusToMessage = (statusCode: number): string => {
    switch (statusCode) {
        case HttpStatusCode.OK:
            return 'Success';
        case HttpStatusCode.CREATED:
            return 'Created';
        case HttpStatusCode.ACCEPTED:
            return 'Accepted';
        case HttpStatusCode.DELETED:
            return 'Delete Success';
        default:
            return 'Success';
    }
};

const useHandlerSuccess = (
    statusCode: number,
    callback: ICallback = { showAlert: false },
    isLogin?: boolean,
) => {
    const message = mapStatusToMessage(statusCode);

    if (callback.showAlert) {
        toast.success(isLogin ? 'Login Success' : message, {
            duration: 3000,
        });

        if (callback.fn) {
            return callback.fn();
        }
    }

    if (!callback.showAlert && callback.fn) {
        return callback.fn();
    }
};

export default useHandlerSuccess;
