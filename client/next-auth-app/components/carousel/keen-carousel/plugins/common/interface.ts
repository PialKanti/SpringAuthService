import {
  KeenSliderHooks,
  KeenSliderInstance,
  KeenSliderOptions,
  SliderInstance,
} from 'keen-slider';

export type IKeenSliderInstance = SliderInstance<
  KeenSliderOptions<object, object, KeenSliderHooks>,
  KeenSliderInstance<object, object, KeenSliderHooks>,
  KeenSliderHooks
>;
