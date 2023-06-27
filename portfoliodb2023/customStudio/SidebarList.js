
const SidebarList = (S) => {
    return S.list()
        .title('Loda Lasson Blog')
        .items([
            S.listItem()
                .title('Featured Blogs')
                .id('featuredItems')
                .child(
                    S.editor().schemaType('featured').documentId('featuredItems')
                ),
                ...S.documentTypeListItems().filter(listItem => !['featured'].includes(listItem.getId()))
                ])
}
export default SidebarList