export function roomDesc (descriptionShort) {
  const { GuestMin, GuestMax, Footage, Bed, 'Private-Bath': PrivateBath } = descriptionShort

  const peopleLimit = GuestMin === GuestMax ? GuestMax : `${GuestMin}~${GuestMax}`

  const footage = `${Footage}`

  const bed = `${Bed.length}張${Bed[0]}床`

  const privateBath = `${PrivateBath}`

  return { peopleLimit, footage, bed, privateBath }
}
