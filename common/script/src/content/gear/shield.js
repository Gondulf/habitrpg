import {translator as t} from '../helpers';
import events from '../events';

let shield = {
  base: {
    0: {
      text: t('shieldBase0Text'),
      notes: t('shieldBase0Notes'),
      value: 0
    }
  },
  warrior: {
    1: {
      text: t('shieldWarrior1Text'),
      notes: t('shieldWarrior1Notes', {
        con: 2
      }),
      con: 2,
      value: 20
    },
    2: {
      text: t('shieldWarrior2Text'),
      notes: t('shieldWarrior2Notes', {
        con: 3
      }),
      con: 3,
      value: 35
    },
    3: {
      text: t('shieldWarrior3Text'),
      notes: t('shieldWarrior3Notes', {
        con: 5
      }),
      con: 5,
      value: 50
    },
    4: {
      text: t('shieldWarrior4Text'),
      notes: t('shieldWarrior4Notes', {
        con: 7
      }),
      con: 7,
      value: 70
    },
    5: {
      text: t('shieldWarrior5Text'),
      notes: t('shieldWarrior5Notes', {
        con: 9
      }),
      con: 9,
      value: 90,
      last: true
    }
  },
  rogue: {
    0: {
      text: t('weaponRogue0Text'),
      notes: t('weaponRogue0Notes'),
      str: 0,
      value: 0
    },
    1: {
      text: t('weaponRogue1Text'),
      notes: t('weaponRogue1Notes', {
        str: 2
      }),
      str: 2,
      value: 20
    },
    2: {
      text: t('weaponRogue2Text'),
      notes: t('weaponRogue2Notes', {
        str: 3
      }),
      str: 3,
      value: 35
    },
    3: {
      text: t('weaponRogue3Text'),
      notes: t('weaponRogue3Notes', {
        str: 4
      }),
      str: 4,
      value: 50
    },
    4: {
      text: t('weaponRogue4Text'),
      notes: t('weaponRogue4Notes', {
        str: 6
      }),
      str: 6,
      value: 70
    },
    5: {
      text: t('weaponRogue5Text'),
      notes: t('weaponRogue5Notes', {
        str: 8
      }),
      str: 8,
      value: 90
    },
    6: {
      text: t('weaponRogue6Text'),
      notes: t('weaponRogue6Notes', {
        str: 10
      }),
      str: 10,
      value: 120,
      last: true
    }
  },
  wizard: {},
  healer: {
    1: {
      text: t('shieldHealer1Text'),
      notes: t('shieldHealer1Notes', {
        con: 2
      }),
      con: 2,
      value: 20
    },
    2: {
      text: t('shieldHealer2Text'),
      notes: t('shieldHealer2Notes', {
        con: 4
      }),
      con: 4,
      value: 35
    },
    3: {
      text: t('shieldHealer3Text'),
      notes: t('shieldHealer3Notes', {
        con: 6
      }),
      con: 6,
      value: 50
    },
    4: {
      text: t('shieldHealer4Text'),
      notes: t('shieldHealer4Notes', {
        con: 9
      }),
      con: 9,
      value: 70
    },
    5: {
      text: t('shieldHealer5Text'),
      notes: t('shieldHealer5Notes', {
        con: 12
      }),
      con: 12,
      value: 90,
      last: true
    }
  },
  special: {
    0: {
      text: t('shieldSpecial0Text'),
      notes: t('shieldSpecial0Notes', {
        per: 20
      }),
      per: 20,
      value: 150,
      canOwn: (function(u) {
        var ref;
        return +((ref = u.backer) != null ? ref.tier : void 0) >= 45;
      })
    },
    1: {
      text: t('shieldSpecial1Text'),
      notes: t('shieldSpecial1Notes', {
        attrs: 6
      }),
      con: 6,
      str: 6,
      per: 6,
      int: 6,
      value: 170,
      canOwn: (function(u) {
        var ref;
        return +((ref = u.contributor) != null ? ref.level : void 0) >= 5;
      })
    },
    goldenknight: {
      text: t('shieldSpecialGoldenknightText'),
      notes: t('shieldSpecialGoldenknightNotes', {
        attrs: 25
      }),
      con: 25,
      per: 25,
      value: 200,
      canOwn: (function(u) {
        return u.items.gear.owned.shield_special_goldenknight != null;
      })
    },
    moonpearlShield: {
      text: t('shieldSpecialMoonpearlShieldText'),
      notes: t('shieldSpecialMoonpearlShieldNotes', {
        con: 15
      }),
      con: 15,
      value: 130,
      canOwn: (function(u) {
        return u.items.gear.owned.shield_special_moonpearlShield != null;
      })
    },
    yeti: {
      event: events.winter,
      specialClass: 'warrior',
      text: t('shieldSpecialYetiText'),
      notes: t('shieldSpecialYetiNotes', {
        con: 7
      }),
      con: 7,
      value: 70
    },
    ski: {
      event: events.winter,
      specialClass: 'rogue',
      text: t('weaponSpecialSkiText'),
      notes: t('weaponSpecialSkiNotes', {
        str: 8
      }),
      str: 8,
      value: 90
    },
    snowflake: {
      event: events.winter,
      specialClass: 'healer',
      text: t('shieldSpecialSnowflakeText'),
      notes: t('shieldSpecialSnowflakeNotes', {
        con: 9
      }),
      con: 9,
      value: 70
    },
    springRogue: {
      event: events.spring,
      specialClass: 'rogue',
      text: t('shieldSpecialSpringRogueText'),
      notes: t('shieldSpecialSpringRogueNotes', {
        str: 8
      }),
      value: 80,
      str: 8
    },
    springWarrior: {
      event: events.spring,
      specialClass: 'warrior',
      text: t('shieldSpecialSpringWarriorText'),
      notes: t('shieldSpecialSpringWarriorNotes', {
        con: 7
      }),
      value: 70,
      con: 7
    },
    springHealer: {
      event: events.spring,
      specialClass: 'healer',
      text: t('shieldSpecialSpringHealerText'),
      notes: t('shieldSpecialSpringHealerNotes', {
        con: 9
      }),
      value: 70,
      con: 9
    },
    summerRogue: {
      event: events.summer,
      specialClass: 'rogue',
      text: t('shieldSpecialSummerRogueText'),
      notes: t('shieldSpecialSummerRogueNotes', {
        str: 8
      }),
      value: 80,
      str: 8
    },
    summerWarrior: {
      event: events.summer,
      specialClass: 'warrior',
      text: t('shieldSpecialSummerWarriorText'),
      notes: t('shieldSpecialSummerWarriorNotes', {
        con: 7
      }),
      value: 70,
      con: 7
    },
    summerHealer: {
      event: events.summer,
      specialClass: 'healer',
      text: t('shieldSpecialSummerHealerText'),
      notes: t('shieldSpecialSummerHealerNotes', {
        con: 9
      }),
      value: 70,
      con: 9
    },
    fallRogue: {
      event: events.fall,
      specialClass: 'rogue',
      text: t('shieldSpecialFallRogueText'),
      notes: t('shieldSpecialFallRogueNotes', {
        str: 8
      }),
      value: 80,
      str: 8
    },
    fallWarrior: {
      event: events.fall,
      specialClass: 'warrior',
      text: t('shieldSpecialFallWarriorText'),
      notes: t('shieldSpecialFallWarriorNotes', {
        con: 7
      }),
      value: 70,
      con: 7
    },
    fallHealer: {
      event: events.fall,
      specialClass: 'healer',
      text: t('shieldSpecialFallHealerText'),
      notes: t('shieldSpecialFallHealerNotes', {
        con: 9
      }),
      value: 70,
      con: 9
    },
    winter2015Rogue: {
      event: events.winter2015,
      specialClass: 'rogue',
      text: t('shieldSpecialWinter2015RogueText'),
      notes: t('shieldSpecialWinter2015RogueNotes', {
        str: 8
      }),
      value: 80,
      str: 8
    },
    winter2015Warrior: {
      event: events.winter2015,
      specialClass: 'warrior',
      text: t('shieldSpecialWinter2015WarriorText'),
      notes: t('shieldSpecialWinter2015WarriorNotes', {
        con: 7
      }),
      value: 70,
      con: 7
    },
    winter2015Healer: {
      event: events.winter2015,
      specialClass: 'healer',
      text: t('shieldSpecialWinter2015HealerText'),
      notes: t('shieldSpecialWinter2015HealerNotes', {
        con: 9
      }),
      value: 70,
      con: 9
    },
    spring2015Rogue: {
      event: events.spring2015,
      specialClass: 'rogue',
      text: t('shieldSpecialSpring2015RogueText'),
      notes: t('shieldSpecialSpring2015RogueNotes', {
        str: 8
      }),
      value: 80,
      str: 8
    },
    spring2015Warrior: {
      event: events.spring2015,
      specialClass: 'warrior',
      text: t('shieldSpecialSpring2015WarriorText'),
      notes: t('shieldSpecialSpring2015WarriorNotes', {
        con: 7
      }),
      value: 70,
      con: 7
    },
    spring2015Healer: {
      event: events.spring2015,
      specialClass: 'healer',
      text: t('shieldSpecialSpring2015HealerText'),
      notes: t('shieldSpecialSpring2015HealerNotes', {
        con: 9
      }),
      value: 70,
      con: 9
    },
    summer2015Rogue: {
      event: events.summer2015,
      specialClass: 'rogue',
      text: t('shieldSpecialSummer2015RogueText'),
      notes: t('shieldSpecialSummer2015RogueNotes', {
        str: 8
      }),
      value: 80,
      str: 8
    },
    summer2015Warrior: {
      event: events.summer2015,
      specialClass: 'warrior',
      text: t('shieldSpecialSummer2015WarriorText'),
      notes: t('shieldSpecialSummer2015WarriorNotes', {
        con: 7
      }),
      value: 70,
      con: 7
    },
    summer2015Healer: {
      event: events.summer2015,
      specialClass: 'healer',
      text: t('shieldSpecialSummer2015HealerText'),
      notes: t('shieldSpecialSummer2015HealerNotes', {
        con: 9
      }),
      value: 70,
      con: 9
    }
  },
  mystery: {
    301405: {
      text: t('shieldMystery301405Text'),
      notes: t('shieldMystery301405Notes'),
      mystery: '301405',
      value: 0
    }
  },
  armoire: {
    gladiatorShield: {
      text: t('shieldArmoireGladiatorShieldText'),
      notes: t('shieldArmoireGladiatorShieldNotes', {
        con: 5,
        str: 5
      }),
      value: 100,
      con: 5,
      str: 5,
      set: 'gladiator',
      canOwn: (function(u) {
        return u.items.gear.owned.shield_armoire_gladiatorShield != null;
      })
    }
  }
};

export default shield;