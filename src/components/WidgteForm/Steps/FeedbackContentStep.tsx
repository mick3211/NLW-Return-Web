import { ArrowLeft } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { FeedBackType, feedbackTypes } from '..';
import CloseButton from '../../CloseButton';
import ScreenshotButton from '../ScreenshotButton';

interface FeedbackContentStepProps {
    feedbackType: FeedBackType;
    onFeedbackRestartRequested: () => void;
    onFeedbackSent: () => void;
}

export default function FeedbackContentStep({
    feedbackType,
    onFeedbackRestartRequested,
    onFeedbackSent,
}: FeedbackContentStepProps) {
    const [screenshot, setScreenshot] = useState<string | null>(null);
    const [coment, setComent] = useState('');

    const feedbackTypeInfo = feedbackTypes[feedbackType];

    function handleSubmitFeedback(ev: FormEvent) {
        ev.preventDefault();
        console.log(screenshot, coment);
        onFeedbackSent();
    }

    return (
        <>
            <header>
                <button
                    type="button"
                    title="Voltar"
                    onClick={onFeedbackRestartRequested}
                    className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
                >
                    <ArrowLeft weight="bold" className="w-4 h-4 " />
                </button>

                <span className="text-xl leading-6 flex items-center gap-2">
                    <img
                        src={feedbackTypeInfo.image.source}
                        alt={feedbackTypeInfo.image.alt}
                        className="w-6 h-6"
                    />
                    {feedbackTypeInfo.title}
                </span>
                <CloseButton />
            </header>

            <form
                className="my-4 w-full"
                onSubmit={ev => handleSubmitFeedback(ev)}
            >
                <textarea
                    onChange={ev => setComent(ev.target.value)}
                    className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-2 resize-none focus:outline-none scrollbar-thumb-zinc-600 scrollbar-track-transparent scrollbar-thin"
                    placeholder="Conte com detalhes o que está acontecendo"
                />

                <footer className="flex gap-2 mt-2">
                    <ScreenshotButton
                        onScreenshotTook={setScreenshot}
                        screenshot={screenshot}
                    />

                    <button
                        type="submit"
                        disabled={coment === ''}
                        className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
                    >
                        Enviar feedback
                    </button>
                </footer>
            </form>
        </>
    );
}
