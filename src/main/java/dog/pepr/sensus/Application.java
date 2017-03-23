package dog.pepr.sensus;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.eclipse.jetty.server.Request;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.handler.AbstractHandler;
import org.eclipse.jetty.webapp.WebAppContext;

// Kill Java 1.5 compiler warnings: http://stackoverflow.com/questions/30690295/removing-warning-messages-on-intellij-idea-while-building-java-project

// https://www.eclipse.org/jetty/documentation/9.4.x/maven-and-jetty.html
// http://stackoverflow.com/questions/10082055/integrating-jetty-with-resteasy
// http://stackoverflow.com/questions/10284584/serving-static-files-w-embedded-jetty
public class Application extends AbstractHandler {

	public void handle(String target,
					   Request baseRequest,
					   HttpServletRequest request,
					   HttpServletResponse response)
			throws IOException, ServletException
	{
		response.setContentType("text/html;charset=utf-8");
		response.setStatus(HttpServletResponse.SC_OK);
		baseRequest.setHandled(true);
		response.getWriter().println("<h1>Hello World</h1>");
	}

	public static void main(String[] args) throws Exception {
		WebAppContext context = new WebAppContext();
		context.setDescriptor("src/main/webapp/WEB-INF/web.xml");
		context.setResourceBase("src/main/webapp/docroot");
		context.setContextPath("/");
		context.setParentLoaderPriority(true);

		Server server = new Server(8080);
		server.setHandler(context);
		server.start();
		server.join();
	}

}
