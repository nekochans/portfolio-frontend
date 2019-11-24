import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withInfo);
addDecorator(withKnobs);
addDecorator(withA11y);

configure(require.context('../src/components', true, /\.stories\.tsx$/), module);
