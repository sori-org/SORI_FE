import { useEffect } from 'react';

const ViewportHeightProvider = () => {
    useEffect(() => {
        const setVh = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };

        setVh(); // 처음 한 번 실행
        window.addEventListener('resize', setVh);

        return () => {
            window.removeEventListener('resize', setVh);
        };
    }, []);

    return null; // 아무것도 렌더링하지 않음
};

export default ViewportHeightProvider;
