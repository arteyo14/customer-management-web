import { toast } from "sonner";

import { IError } from "@/types/constant/http";
import { ICallback } from "@/types/constant/toats";
import HttpStatusCode from "@/types/constant/http-status-code";

import useActionStore from "@/modules/core/action/store/action-store";

type ToastConfig = {
  title: string;
  description?: string;
  variant?: "default" | "error" | "warning";
};

const mapStatusToToast = (statusCode: number, error?: IError): ToastConfig => {
  switch (statusCode) {
    case HttpStatusCode.INTERNAL_SERVER_ERROR:
      return {
        title: "Error",
        description: "Something went wrong",
        variant: "error",
      };

    case HttpStatusCode.LOCKED:
      return {
        title: "Locked",
        description: "Locked",
        variant: "error",
      };

    case HttpStatusCode.UNAUTHORIZED:
      return {
        title: "Unauthorized",
        description: "Unauthorized",
        variant: "error",
      };

    default:
      return {
        title: "Error",
        description: error?.message,
        variant: "error",
      };
  }
};

const handleError = (
  statusCode: number,
  error?: IError,
  callback: ICallback = { showAlert: false },
) => {
  const actionStore = useActionStore.getState();

  if (statusCode === HttpStatusCode.VALIDATE) {
    if (error) actionStore.actions.setErrors(error.field);
    return;
  }

  const toastConfig = mapStatusToToast(statusCode, error);
  const message = error?.message || toastConfig.description;

  if (callback.showAlert) {
    toast.error(message, {
      duration: 3000,
      unstyled: true,
      className: "bg-destructive text-white px-4 py-3 rounded-lg w-full",
      onAutoClose: () => {
        if (callback.fn) callback.fn();
      },
      onDismiss: () => {
        if (callback.fn) callback.fn();
      },
    });

    return;
  }

  if (callback.fn) {
    callback.fn();
  }
};

export default handleError;
