import { toast } from 'sonner';

import { IError } from '@/types/constant/http';
import { ICallback } from '@/types/constant/toats';
import HttpStatusCode from '@/types/constant/http-status-code';

import useActionStore from '@/modules/core/action/store/action-store';

type ToastConfig = {
    title: string;
    description?: string;
    variant?: 'default' | 'error' | 'warning';
};

const mapStatusToToast = (statusCode: number, error?: IError): ToastConfig => {
    switch (statusCode) {
        case HttpStatusCode.INTERNAL_SERVER_ERROR:
            return {
                title: 'Error',
                description: 'Something went wrong',
                variant: 'error',
            };

        case HttpStatusCode.LOCKED:
            return {
                title: 'Locked',
                description: 'Locked',
                variant: 'error',
            };

        case HttpStatusCode.UNAUTHORIZED:
            return {
                title: 'Unauthorized',
                description: 'Unauthorized',
                variant: 'error',
            };

        default:
            return {
                title: 'Error',
                description: error?.message,
                variant: 'error',
            };
    }
};

const useHandlerError = (
    statusCode: number,
    error?: IError,
    callback: ICallback = { showAlert: false },
) => {
    const actionStore = useActionStore.getState();

    if (statusCode === HttpStatusCode.NOT_FOUND) {
        return toast.error('Not Found');
    }


    if (statusCode === HttpStatusCode.VALIDATE) {
        const actions = actionStore.actions;

        if (error) {
            actions.setErrors(error.field);
        }
        return;
    }

    const toastConfig = mapStatusToToast(statusCode, error);

    if (callback.showAlert) {
        toast(toastConfig.title, {
            description: toastConfig.description,
            duration: 4000,
            onAutoClose: callback.fn,
        });
    }

    if (!callback.showAlert && callback.fn) {
        return callback.fn();
    }
};

export default useHandlerError;
