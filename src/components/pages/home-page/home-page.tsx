import { Button } from '@/components/common/button/button';
import { Selection } from '@/components/common/selection/selection';
import { ThemeSwitcher } from '@/components/common/theme-switcher/theme-switcher';
import html from '@/assets/html-icon.svg';

export function HomePage() {
  return (
    <main>
      <Button text={'Submit Answer'} />
      <Selection url={html} text="HTML" />
      <ThemeSwitcher />
    </main>
  );
}
