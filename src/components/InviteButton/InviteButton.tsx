import React, { memo, FC, useState } from "react";
import classnames from "classnames";

import styles from "./InviteButton.module.css";

export interface InviteButtonProps {
  isInitialInvited: boolean;
  onClick: () => Promise<boolean>;
}

export const InviteButtonRaw: FC<InviteButtonProps> = ({
  isInitialInvited,
  onClick,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isInvited, setIsInvited] = useState(isInitialInvited);
  const handleOnClick = async () => {
    setIsLoading(true);

    const result = await onClick();

    if (result) {
      setIsInvited(true);
    }

    setIsLoading(false);
  };

  return (
    <button
      className={classnames([
        styles.button,
        {
          [styles.disabled]: isLoading || isInvited,
        },
      ])}
      onClick={handleOnClick}
    >
      {isLoading ? "Loading" : isInvited ? "Invited" : "Invite"}
    </button>
  );
};

export const InviteButton = memo(InviteButtonRaw);
