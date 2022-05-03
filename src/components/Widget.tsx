import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react';

export default function () {
    return (
        <Popover className="group absolute bottom-4 right-4">
            <Popover.Panel>hello world</Popover.Panel>

            <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center">
                <ChatTeardropDots className="h-6 w-6" />
                <span className="max-w-0 overflow-hidden transition-all duration-500 ease-linear group-hover:max-w-xs">
                    <span className="pl-2">Feedback</span>
                </span>
            </Popover.Button>
        </Popover>
    );
}
