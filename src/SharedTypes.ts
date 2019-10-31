export interface IUserProps {
  id: string;
  username: string;
  avatar: string;
}

export interface ITagsProps {
  id: string;
  text: string;
}

export interface IFilesProps {
  id: string;
  url: string;
  src: string;
}

interface IInputProps {
  value: string;
  onChange(e?: React.ChangeEvent<HTMLTextAreaElement>): void;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
