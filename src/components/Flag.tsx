import twemoji from 'twemoji';

const Flag = ({ emoji, size = 20 }: { emoji: string; size?: number }) => {
    const svg = twemoji.parse(emoji, { folder: 'svg', ext: '.svg' });
    // twemoji.parse returns an <img> tag string — we can use that
    return (
        <span
            className="flag-svg"
            style={{ display: 'inline-block', width: size, height: size }}
            dangerouslySetInnerHTML={{ __html: svg }}
        />
    );
};
export default Flag;
