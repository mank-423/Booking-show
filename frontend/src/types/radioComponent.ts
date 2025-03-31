export type RadioComponentProps = {
    text: string;
    changeSelection?: (val: string) => void;
    key?: number;
    data?: string;
}

export type SeatInputComponentProps = {
    text: string;
    changeSelection?: (val: React.ChangeEvent<HTMLInputElement>) => void;
    key?: number;
    data?: string;
}

export type LastBookingProps = {
    toggleFunction?: () => void;
    toggleState: boolean;
}