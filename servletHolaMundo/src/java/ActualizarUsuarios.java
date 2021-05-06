/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author valery nuñez
 */


import java.sql.Connection;
import java.sql.DriverManager;
/*
Statement nos ayuda a poder definir y manipular los datos de las bd
creacion de la bd, insertar tablas, eleminar tablas,  create, drop, alter
    manipulacion de los datos, insert, update, delete
*/
import java.sql.Statement;
/*
nos ayuda para las querrys, o las consultas a la bd
*/
import java.sql.ResultSet;
import javax.servlet.ServletConfig;

public class ActualizarUsuarios extends HttpServlet {
    //variables globales
    
    private Connection con;
    private Statement set;
    private ResultSet rs;
    
    //el constructor del servlet
    //nos va a ayudar a inicializar la conexion con la bd
    
    public void init(ServletConfig cfg) throws ServletException{
        
        //lo primero que necesitamos es trazar la ruta al servidor DB
        String URL = "jdbc:mysql://localhost/registro4iv8";
        //driver:gestor:puerto//IP/nombreBD
        
        String userName = "root";
        String password = "ohman123";
        
        try{
            //colocamos el tipo de driver
            Class.forName("com.mysql.jdbc.Driver");
            
            /*
            en algunas ocaciones enviar error al conectarse con la bd
            y eso se debe a que ya estegrado el puerto en el driver
            URL = "jdbc:mysql://localhost/registro4iv8";
            */
            URL = "jdbc:mysql://localhost/registro4iv8";
            con = DriverManager.getConnection(URL, userName, password);
            set = con.createStatement();
            System.out.println("Conexion exitosa");
                        
        
        }catch(Exception e){
            
            System.out.println("Conexion no exitosa");
            System.out.println(e.getMessage());
            System.out.println(e.getStackTrace());
        
        }
    }

    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            
            try{
                
            String nom,apellidop, correo,apellidom, id;
            int  edad;

            String q;
                
                set = con.createStatement();
                id = request.getParameter("radioid");
                System.out.println(id);
                nom = request.getParameter("nom_usuario");
               
                apellidop = request.getParameter("appat_usuario");
                apellidom = request.getParameter("apmat_usuario");
                edad = Integer.parseInt(request.getParameter("edad_usuario"));
                correo = request.getParameter("correo_usuario");

                q = "update mregistrodos set nom_usu = '"+nom+"', appat_usu = '"+apellidop+"', apmat_usu = '"+apellidom+"', edad_usu = "+edad+", correo_usu = '"+correo+"' where id_usu = "+id+" ";
                System.out.println(q);
                System.out.println("Registro exitoso");
                set.executeUpdate(q);
                set.close();    
                
 
            
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<link rel='stylesheet' href='./CSS/diseño4.css'>");
            out.println("<title>Servlet Registro</title>");            
            out.println("</head>");
            out.println("<body>"
                    + "Tu nombre es: " + nom
                    + "<br>"
                    + "Tu apellido paterno es: " + apellidop
                    + "<br>"
                    + "Tu apellido materno es: " + apellidom
                    + "<br>"
                    + "Tu edad es: " + edad
                    + "<br>"
                    + "Tu correo es: " + correo);
            out.println("<h1>Registro Exitoso</h1>"
                    + "<a href='index.html'>Regresar a la pagina principal</a>"
                    + "<br>"
                    + "<a href='Consultar'>Consultar Tabla General de Usuarios</a>");
            out.println("</body>");
            out.println("</html>");
            
            }catch(Exception e){
                
                out.println("<!DOCTYPE html>");
                out.println("<html>");
                out.println("<head>");
                out.println("<title>Servlet Registro</title>");
                out.println("<link rel='stylesheet' href='./CSS/diseño4.css'>");
                out.println("</head>");
                out.println("<body>");
                out.println("<h1>Actualizacion No Exitosa, vuelva a intentarlo</h1>"
                    + "<a href='index.html'>Regresar a la pagina principal</a>");
                out.println("</body>");
                out.println("</html>");
                
                System.out.println("No se registro en la tabla");
                System.out.println(e.getMessage());
                System.out.println(e.getStackTrace());
            
            }
        }
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}

