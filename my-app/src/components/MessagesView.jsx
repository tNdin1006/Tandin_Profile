import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiTrash2, FiSend, FiInbox, FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';
import Swal from 'sweetalert2';

const API_BASE_URL = window.location.hostname === "localhost" 
  ? "http://localhost:5000" 
  : "https://tandin-api.vercel.app";

const MessagesView = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/messages`);
      const data = await response.json();
      setMessages(data);
      setLoading(false);
    } catch (error) {
      console.error("Fetch error:", error);
      setLoading(false);
    }
  };

  useEffect(() => { fetchMessages(); }, []);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Delete Inquiry?',
      text: "This action is permanent in MongoDB Atlas.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      confirmButtonText: 'Delete'
    });

    if (result.isConfirmed) {
      try {
        await fetch(`${API_BASE_URL}/api/messages/${id}`, { method: 'DELETE' });
        setMessages(messages.filter(msg => msg._id !== id));
        Swal.fire({ title: 'Deleted!', icon: 'success', timer: 1500 });
      } catch (error) {
        Swal.fire('Error', 'Delete failed', 'error');
      }
    }
  };

  const handleReply = (msg) => {
    Swal.fire({
      title: `Reply to ${msg.name}`,
      input: 'textarea',
      inputPlaceholder: 'Write your message here...',
      showCancelButton: true,
      confirmButtonText: 'Open Email',
      confirmButtonColor: '#3b82f6',
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = `mailto:${msg.email}?subject=Re: Portfolio Inquiry&body=${encodeURIComponent(result.value)}`;
      }
    });
  };

  return (
    <section id="messages" className="admin-messages-section">
      <div className="container">
        <div className="admin-header">
          <div className="header-text">
            <h2 className="admin-title"><FiInbox /> Client Inquiries</h2>
            <p className="admin-subtitle">Real-time data from MongoDB Atlas Cluster.</p>
          </div>
          <div className="stats-badge">{messages.length} Total</div>
        </div>

        {loading ? (
          <div className="loader">Connecting to Database...</div>
        ) : (
          <div className="table-container">
            <table className="modern-table">
              <thead>
                <tr>
                  <th><FiUser /> Name</th>
                  <th><FiMail /> Email</th>
                  <th><FiMessageSquare /> Message</th>
                  <th style={{ textAlign: 'center' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {messages.length === 0 ? (
                  <tr><td colSpan="4" className="empty-state">No inquiries yet.</td></tr>
                ) : (
                  messages.map((msg) => (
                    <motion.tr key={msg._id} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <td className="font-bold">{msg.name}</td>
                      <td className="text-muted">{msg.email}</td>
                      <td><div className="message-truncate" title={msg.message}>{msg.message}</div></td>
                      <td>
                        <div className="action-flex">
                          <button className="btn-icon reply" onClick={() => handleReply(msg)}><FiSend /></button>
                          <button className="btn-icon delete" onClick={() => handleDelete(msg._id)}><FiTrash2 /></button>
                        </div>
                      </td>
                    </motion.tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default MessagesView;