import { Container } from './styled';
import { ExperienciasData } from '@/config/domain/experiencias/experiencias';
import { getTranslations } from 'next-intl/server';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Heading, Text } from '@radix-ui/themes';
import { DateFormat } from '../DateFormat';
import { CurriculosData } from '@/config/domain/curriculos/curriculos';
import { API_ROOT } from '@/config/siteConfig';
import Link from 'next/link';
import Image from 'next/image';
import { rgbDataURL } from '@/utils/rgbDataUrl';
import { getPredominantColor } from '@/utils/getPredominantColor';

export interface AutorDetailsProps {
    experiencias: ExperienciasData[];
    gitHub: string;
    linkedin: string;
    site: string;
    curriculos: CurriculosData[];
}

export const AutorDetails = async ({ experiencias, gitHub, linkedin, site, curriculos }: AutorDetailsProps) => {
    const t = await getTranslations('Pages.InternalPage.AuthorsPage');
    return (
        <Container className="rounded p-1 sm:p-3 bg-gray-200 dark:bg-gray-800 grid gap-3">
            {experiencias !== undefined && experiencias.length > 0 && (
                <Timeline position="alternate">
                    {experiencias.map(async (experiencia, index) => {
                        let url;
                        let width;
                        let height;
                        if (
                            experiencia.attributes.cover.data.attributes.formats !== null &&
                            experiencia.attributes.cover.data.attributes.formats.small !== undefined
                        ) {
                            url = `${API_ROOT}${experiencia.attributes.cover.data.attributes.formats.small.url}`;
                            width = experiencia.attributes.cover.data.attributes.formats.small.width;
                            height = experiencia.attributes.cover.data.attributes.formats.small.height;
                        } else {
                            url = `${API_ROOT}${experiencia.attributes.cover.data.attributes.url}`;
                            width = experiencia.attributes.cover.data.attributes.width;
                            height = experiencia.attributes.cover.data.attributes.height;
                        }

                        const predominantColor = await getPredominantColor(url);
                        return (
                            <TimelineItem key={`experiencia-${experiencia.attributes.slug}`}>
                                <TimelineOppositeContent>
                                    <Text color="violet">
                                        <DateFormat date={experiencia.attributes.inicio} />
                                        {' - '}
                                        {experiencia.attributes.termino !== null ? (
                                            <DateFormat date={experiencia.attributes.termino} />
                                        ) : (
                                            t('until now')
                                        )}
                                    </Text>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <TimelineDot color={index === 0 ? 'success' : 'grey'} />
                                    {experiencias.length - 1 > index && <TimelineConnector />}
                                </TimelineSeparator>
                                <TimelineContent>
                                    <div className="grid w-fit gap-3 items-start p-2 sm:p-3 rounded bg-white dark:bg-gray-950">
                                        <Link
                                            className="flex justify-center items-center"
                                            href={`/experiencias/${experiencia.attributes.slug}`}
                                            title={`${experiencia.attributes.cargo} - ${experiencia.attributes.empresa}`}
                                        >
                                            <Image
                                                placeholder="blur"
                                                blurDataURL={rgbDataURL(
                                                    predominantColor[0],
                                                    predominantColor[1],
                                                    predominantColor[2],
                                                )}
                                                className="border-1 bg-gray-200 border-gray-200 dark:bg-gray-900 rounded p-1 hover:p-0 transition-all"
                                                src={url}
                                                alt={`${experiencia.attributes.cargo} - ${experiencia.attributes.empresa}`}
                                                width={width}
                                                height={height}
                                            />
                                        </Link>
                                        <Heading as="h3" className="text-center" size={'4'}>
                                            <Link
                                                className="hover:text-[--accent-a9] transition"
                                                href={`/experiencias/${experiencia.attributes.slug}`}
                                                title={`${experiencia.attributes.cargo} - ${experiencia.attributes.empresa}`}
                                            >
                                                {`${experiencia.attributes.cargo} - ${experiencia.attributes.empresa}`}
                                            </Link>
                                        </Heading>
                                    </div>
                                </TimelineContent>
                            </TimelineItem>
                        );
                    })}
                </Timeline>
            )}
            {gitHub !== null ||
            linkedin !== null ||
            site !== null ||
            (curriculos !== undefined && curriculos.length > 0) ? (
                <div className="grid gap-y-2 md:flex justify-between">
                    <div className="grid gap-y-2">
                        {gitHub !== null && (
                            <Text as="p">
                                {`${t('GitHub link')}: `}
                                <a
                                    className="underline hover:text-[--accent-a9] transition break-all"
                                    href={gitHub}
                                    target="_new"
                                    title={`${t('Github profile')}`}
                                >
                                    {gitHub}
                                </a>
                            </Text>
                        )}
                        {linkedin !== null && (
                            <Text as="p">
                                {`${t('Linkedin link')}: `}
                                <a
                                    className="underline hover:text-[--accent-a9] transition break-all"
                                    href={linkedin}
                                    target="_new"
                                    title={`${t('Linkedin profile')}`}
                                >
                                    {linkedin}
                                </a>
                            </Text>
                        )}
                        {site !== null && (
                            <Text as="p">
                                {`${t('Website link')}: `}
                                <a
                                    className="underline hover:text-[--accent-a9] transition break-all"
                                    href={site}
                                    target="_new"
                                    title={`${t('Link to access the website')}`}
                                >
                                    {site}
                                </a>
                            </Text>
                        )}
                    </div>
                    {curriculos !== undefined && curriculos.length > 0 && (
                        <div className="grid gap-y-2" id="curriculos">
                            {curriculos.map((curriculo) => {
                                return (
                                    <a
                                        key={`autor-${curriculo.id}`}
                                        className="hover:text-[--accent-a9] transition h-min"
                                        href={`${API_ROOT}${curriculo.attributes.documento.data.attributes.url}`}
                                        target="_new"
                                        title={`Download ${curriculo.attributes.nome}`}
                                    >
                                        {curriculo.attributes.nome + ' '}
                                        <i className="bi bi-download"></i>
                                    </a>
                                );
                            })}
                        </div>
                    )}
                </div>
            ) : (
                <></>
            )}
        </Container>
    );
};
