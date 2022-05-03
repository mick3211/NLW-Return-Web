import { CircleNotch } from 'phosphor-react';

export default function Loading() {
    return (
        <div className="w-6 h-6 grid place-items-center">
            <CircleNotch weight="bold" className="w-4 h-4 animate-spin" />
        </div>
    );
}
