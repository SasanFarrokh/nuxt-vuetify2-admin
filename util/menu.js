export default function () {
  const t = this.$t.bind(this)
  const l = this.localePath.bind(this)
  return [
    { header: t('app.title') },
    {
      title: 'Home',
      icon: 'mdi-view-dashboard',
      name: 'Dashboard',
      href: l('index')
    },
    { header: 'divider' },
    {
      title: 'Nested',
      icon: 'mdi-file-document-box-search',
      name: 'WebOrders',
      items: [
        { title: 'Menu' }
      ]
    }
  ]
}
