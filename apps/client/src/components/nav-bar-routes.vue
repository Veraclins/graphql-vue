<script>
const BaseLink = 'BaseLink';

export default {
  functional: true,
  props: {
    routes: {
      type: Array,
      required: true,
    },
  },
  render(h, { props, $style = {} }) {
    const normalizedRoutes = props.routes.map(route =>
      Object.keys(route).reduce(
        (acc, key) => ({
          ...acc,
          [key]: typeof route[key] === 'function' ? route[key]() : route[key],
        }),
        {}
      )
    );

    return normalizedRoutes.map(route => (
      <BaseLink
        tag="li"
        key={route.name}
        to={route}
        exact-active-class={$style.active}
      >
        <a class={$style.navItem}>{route.title}</a>
      </BaseLink>
    ));
  },
};
</script>

<style lang="scss" module>
@import '@design';
.navItem {
  color: $color-main;
  text-decoration: none;

  @include small {
    margin: 0 0 20px 0;
  }
  &:hover {
    color: $color-secondary;
  }
}
.active a {
  padding-bottom: px-rem(5);
  font-weight: 700;
  cursor: default;
  border-bottom: 1px solid;
}
</style>
