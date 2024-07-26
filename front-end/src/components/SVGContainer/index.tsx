export interface SVGProps {
    svgUrl: string;
    className: string;
}

export const SVGContainer = async ({ svgUrl, className }: SVGProps) => {
    const data = await fetch(svgUrl);
    const svg = (await data.text()).replace(/fill="[^"]*"/g, 'fill="currentColor"');
    return <span className={`${className} flex`} dangerouslySetInnerHTML={{ __html: svg }}></span>;
};
