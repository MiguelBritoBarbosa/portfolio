'use client';
import { useTheme } from 'next-themes';
import { SwitchThemeButton } from './styled';
import { useEffect, useState } from 'react';
import { Button, DropdownMenu } from '@radix-ui/themes';
import { useTranslations } from 'next-intl';

export const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();
    const [currentTheme, setCurrentTheme] = useState(<></>);
    const t = useTranslations('HeaderTop.Theme');

    useEffect(() => {
        if (theme) {
            switch (theme) {
                case 'light':
                    setCurrentTheme(<i className="bi bi-brightness-high-fill"></i>);
                    return;
                case 'dark':
                    setCurrentTheme(<i className="bi bi-moon-fill"></i>);
                    return;
                case 'system':
                    setCurrentTheme(<i className="bi bi-pc-display-horizontal"></i>);
                    return;
            }
        }
    }, [theme]);

    return (
        <SwitchThemeButton>
            <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                    <Button variant="soft" className="cursor-pointer transition" aria-label={t('Theme Switcher')}>
                        {currentTheme}
                        <DropdownMenu.TriggerIcon />
                    </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                    <DropdownMenu.Item onClick={() => setTheme('light')}>
                        <i className="bi bi-brightness-high-fill"></i> {t('Light')}
                    </DropdownMenu.Item>
                    <DropdownMenu.Item onClick={() => setTheme('dark')}>
                        <i className="bi bi-moon-fill"></i> {t('Dark')}
                    </DropdownMenu.Item>
                    <DropdownMenu.Item onClick={() => setTheme('system')}>
                        <i className="bi bi-pc-display-horizontal"></i> {t('System')}
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Root>
        </SwitchThemeButton>
    );
};
