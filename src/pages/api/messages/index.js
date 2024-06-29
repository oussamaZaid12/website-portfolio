// src/pages/api/messages/index.js
import supabase from '../../../config/supabaseClient';

const handler = async (req, res) => {
  switch (req.method) {
    case 'GET':
      try {
        let { data: messages, error } = await supabase
          .from('messages')
          .select('*');
        if (error) throw error;
        res.status(200).json(messages);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;
    case 'POST':
      try {
        const { name, email, message } = req.body;
        const { data, error } = await supabase
          .from('messages')
          .insert([{ name, email, message }]);
        if (error) throw error;
        res.status(201).json(data);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;
    default:
      res.status(405).json({ error: 'Method not allowed' });
      break;
  }
};

export default handler;
