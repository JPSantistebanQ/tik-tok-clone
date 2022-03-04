import PropTypes, { InferProps } from 'prop-types';

import { supabase } from './supabase';

const prefix = import.meta.env.VITE_SUPABASE_STORAGE_URL;

export const getVideos = async () => {
  const { data, error } = await supabase
    .from('videos')
    .select(
      `*, user:user_id (
        avatar,
        username,
        id
      )`,
    )
    .order('created_at', { ascending: false });

  return [error, data];
};

export const uploadVideo = async ({ videoFile }) => {
  const filename = window.crypto.randomUUID();

  const { data, error } = await supabase.storage
    .from('videos')
    .upload(`uploads/${filename}.mp4`, videoFile);

  const file = data?.Key ? `${prefix}${data.Key}` : '';
  return [error, file];
};

const PublishVideoPropTypes = {
  videoSrc: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

type PublishVideoTypes = InferProps<typeof PublishVideoPropTypes>;

export const publishVideo: React.FC<PublishVideoTypes> = async ({
  videoSrc,
  description,
}) => {
  const defaultAlbum =
    'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/81fd9366b0f1841e1e6990492b5c9004~c5_720x720.jpeg?x-expires=1632060000&x-signature=lJ7S3aE3YqHr8WbhkwXNIasqkZo%3D';
  const defaultSong = 'jpsantq songs';

  const { data, error } = await supabase.from('videos').insert([
    {
      user_id: '54f876df-fec6-4da7-a1ba-6210ea0f1760',
      description,
      albumCover: defaultAlbum,
      songTitle: defaultSong,
      src: videoSrc,
    },
  ]);

  return [error, data];
};
