import { badgesType } from "app/shared/design-system/components/sx-badges/model/bagdges.type";

export const statusBadgeSoap = (value) => {
  let badgeLabel = '';
  let badgeType: badgesType = 'default';

  switch(value) {
    case 'L':
      badgeLabel = 'Latente';
      badgeType = 'alert';
      break;
    case 'A':
      badgeLabel = 'Ativo';
      badgeType = 'error';
      break;
    case 'R':
      badgeLabel = 'Resolvida';
      badgeType = 'sucess';
      break;
    default:
      badgeLabel = '';
      badgeType = 'default';
  }

  return {
    badgeLabel,
    badgeType
  }
}
