function checkSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
  let secure = isDoorLocked && isWindowClosed && isAlarmOn && isOwnerInside;
  console.log(
    `DoorLocked: ${isDoorLocked}, WindowClosed: ${isWindowClosed}, AlarmOn: ${isAlarmOn}, OwnerInside: ${isOwnerInside} -> ${
      !secure ? "Unsafe" : "Secure"
    }`
  );
}

checkSecurity(true, true, true, true);
checkSecurity(true, false, true, true);
checkSecurity(true, true, false, true);
checkSecurity(true, true, true, false);
