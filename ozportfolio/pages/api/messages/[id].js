// src/pages/api/messages/[id].js
import supabase from '../../../src/config/supabaseClient';

export default async (req, res) => {
  const { id } = req.query;
  switch (req.method) {
    case 'PUT':
      try {
        const { name, email, message } = req.body;
        const { data, error } = await supabase
          .from('messages')
          .update({ name, email, message })
          .eq('id', id);
        if (error) throw error;
        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;
    case 'DELETE':
      try {
        const { error } = await supabase
          .from('messages')
          .delete()
          .eq('id', id);
        if (error) throw error;
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;
    default:
      res.status(405).json({ error: 'Method not allowed' });
      break;
  }
};
