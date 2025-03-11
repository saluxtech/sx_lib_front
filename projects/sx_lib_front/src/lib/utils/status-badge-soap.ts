import { badgesType } from "sx_lib_front";

export const statusBadgeSoap = (value: any) => {
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
