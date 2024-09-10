interface FailedVerification<T> {
    status: "failed";
    reason: "expired" | "invalid" | "missing";
    payload?: T;
}

interface SuccessfulVerification<T> {
    status: "success";
    payload: T;
}

// interface SuccessfulVerificationNoRefresh<T> extends SuccessfulVerificationBase<T> {
//     isRefreshNeeded: false;
// }

// interface SuccessfulVerificationRefresh<T> extends SuccessfulVerificationBase<T> {
//     isRefreshNeeded: true;
//     token: string;
// }

// export type SuccessfulVerification<T> = SuccessfulVerificationNoRefresh<T> | SuccessfulVerificationRefresh<T>;

export type VerificationResult<T> = FailedVerification<T> | SuccessfulVerification<T>;