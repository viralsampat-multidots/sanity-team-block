export const teamBlockQuery = `
*[_type == "teamMember"] | order( name asc ) {
_id,
name,
designation,
shortDescription,
image,
linkedin,
}
`